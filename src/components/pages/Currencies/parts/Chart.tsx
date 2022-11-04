import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import GetTodayDate from "utils/GetTodayDate";
import GetCurrencyHistoricalPrices from "api/GetCurrencyHistoricalPrices";

import { ILineChartData } from "interfaces/ILineChartData";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

import ApiError from "components/ApiError";
import StyledTile from "components/styled/StyledTile";
import LineChart from "components/LineChart";
import Loader from "components/Loader";
import StyledHeading from "components/styled/StyledHeading";
import ChartDates from "../elements/ChartDates";

interface IProps {
  currencySymbol: Exclude<ECurrencySymbol, ECurrencySymbol.pln>;
}

enum ECalculateActions {
  add = "add",
  subtract = "subract",
}

const calculateDate = (
  comparedDate: string,
  action: ECalculateActions,
  diff: number
) => {
  let date: Date | string = new Date(comparedDate);

  if (action === ECalculateActions.add) {
    date.setDate(date.getDate() + diff);
  } else if (action === ECalculateActions.subtract) {
    date.setDate(date.getDate() - diff);
  }

  date = date.toISOString().split("T")[0];

  return date;
};

const Chart: React.FC<IProps> = ({ currencySymbol }) => {
  const theme: any = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ILineChartData>(null as any);

  const [endDate, setEndDate] = useState<string>(GetTodayDate());
  const [startDate, setStartDate] = useState<string>(
    calculateDate(endDate, ECalculateActions.subtract, 180)
  );

  const [minStartDate, setMinStartDate] = useState<string>();
  const [minEndDate, setMinEndDate] = useState<string>();
  const [maxStartDate, setMaxStartDate] = useState<string>();

  const loadPrices = async (start: string, end: string) => {
    const loadedPrices = await GetCurrencyHistoricalPrices(
      currencySymbol,
      start,
      end
    );

    if (loadedPrices === undefined) {
      setShowError(true);
      setIsLoading(false);
    } else {
      setChartData({
        labels: loadedPrices!,
        datasets: [
          {
            borderWidth: 1,
            borderColor: theme.colors.main,
            backgroundColor: theme.colors.main,
            data: loadedPrices!,
          },
        ],
      });
    }
  };

  useEffect(() => {
    loadPrices(startDate, endDate);
    setMinStartDate(calculateDate(endDate, ECalculateActions.subtract, 354));
    setMinEndDate(calculateDate(startDate, ECalculateActions.add, 14));
    setMaxStartDate(calculateDate(endDate, ECalculateActions.subtract, 14));
  }, [startDate, endDate]);

  useEffect(() => {
    if (chartData !== null) {
      chartData.labels !== undefined &&
      !chartData.datasets.some((obj) => obj.data === undefined)
        ? setIsLoading(false)
        : setIsLoading(true);
    }
  }, [chartData]);

  return (
    <StyledTile as={StyledChart}>
      <StyledHeading>{currencySymbol}/PLN</StyledHeading>
      <ChartDates
        startDate={startDate}
        endDate={endDate}
        minStartDate={minStartDate!}
        minEndDate={minEndDate!}
        maxStartDate={maxStartDate!}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {isLoading && <Loader />}
      {!isLoading && showError ? <ApiError /> : null}
      {!isLoading && !showError ? <LineChart chartData={chartData} /> : null}
    </StyledTile>
  );
};

export default Chart;

const StyledChart = styled.div`
  margin-bottom: 24px;
  h2 {
    text-transform: uppercase;
  }
  canvas {
    margin-top: 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    h2 {
      margin-right: auto;
      padding-right: 35px;
    }
    canvas {
      margin-top: 0;
      flex-basis: 100%;
    }
  }
`;
