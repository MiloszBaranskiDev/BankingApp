import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import GetTodayDate from "utils/GetTodayDate";
import GetCurrencyHistoricalPrices from "api/GetCurrencyHistoricalPrices";

import { ITheme } from "interfaces/ITheme";
import { ILineChartData } from "interfaces/ILineChartData";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

import ApiError from "components/ApiError";
import StyledTile from "components/styled/StyledTile";
import LineChart from "components/LineChart";
import LoaderSmall from "components/LoaderSmall";
import StyledHeading from "components/styled/StyledHeading";
import ChartDates from "../elements/ChartDates";

interface IProps {
  currencySymbol: Exclude<ECurrencySymbol, ECurrencySymbol.pln>;
}

enum ECalculateAction {
  add,
  subtract,
}

const apiMinDate: Date = new Date("2002-01-03");

const changeDateToString = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

const calculateDate = (
  comparedDate: Date,
  action: ECalculateAction,
  diff: number
): Date => {
  let date: Date = new Date(comparedDate);

  if (action === ECalculateAction.add) {
    date.setDate(date.getDate() + diff);
  } else if (action === ECalculateAction.subtract) {
    date.setDate(date.getDate() - diff);
  }

  return date;
};

const Chart: React.FC<IProps> = ({ currencySymbol }) => {
  const theme = useTheme() as ITheme;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ILineChartData>(null as any);

  const [endDate, setEndDate] = useState<Date>(new Date(GetTodayDate()));
  const [startDate, setStartDate] = useState<Date>(
    calculateDate(endDate, ECalculateAction.subtract, 180)
  );

  const [minStartDate, setMinStartDate] = useState<Date>();
  const [minEndDate, setMinEndDate] = useState<Date>();
  const [maxStartDate, setMaxStartDate] = useState<Date>();

  const loadPrices = async (start: Date, end: Date) => {
    const loadedPrices = await GetCurrencyHistoricalPrices(
      currencySymbol,
      changeDateToString(start),
      changeDateToString(end)
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
    setMinStartDate(calculateDate(endDate, ECalculateAction.subtract, 354));
    setMinEndDate(calculateDate(startDate, ECalculateAction.add, 14));
    setMaxStartDate(calculateDate(endDate, ECalculateAction.subtract, 14));
  }, [startDate, endDate]);

  useEffect(() => {
    if (chartData !== null) {
      chartData.labels !== undefined &&
      !chartData.datasets.some((obj) => obj.data === undefined)
        ? setIsLoading(false)
        : setIsLoading(true);
    }
  }, [chartData]);

  useEffect(() => {
    startDate! < apiMinDate && setStartDate(apiMinDate);
  }, [startDate]);

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
      {isLoading && <LoaderSmall />}
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
    flex-basis: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    h2 {
      margin-right: auto;
      padding-right: 35px;
    }
  }
`;
