import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import GetTodayDate from "utils/GetTodayDate";
import GetCurrencyHistoricalPrices from "api/GetCurrencyHistoricalPrices";

import { ILineChartData } from "interfaces/ILineChartData";
import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

import LineChart from "components/LineChart";
import Loader from "components/Loader";
import StyledHeading from "components/styled/StyledHeading";
import ChartDates from "../elements/ChartDates";

interface IProps {
  currencySymbol: Exclude<ECurrenciesSymbols, ECurrenciesSymbols.pln>;
}

enum CalculateActions {
  add = "add",
  subtract = "subract",
}

const calculateDate = (
  comparedDate: string,
  action: CalculateActions,
  diff: number
) => {
  let date: Date | string = new Date(comparedDate);

  if (action === CalculateActions.add) {
    date.setDate(date.getDate() + diff);
  } else if (action === CalculateActions.subtract) {
    date.setDate(date.getDate() - diff);
  }

  date = date.toISOString().split("T")[0];

  return date;
};

const Chart: React.FC<IProps> = ({ currencySymbol }) => {
  const theme: any = useTheme();

  const [loading, setLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<ILineChartData>(null as any);

  const [endDate, setEndDate] = useState<string>(GetTodayDate());
  const [startDate, setStartDate] = useState<string>(
    calculateDate(endDate, CalculateActions.subtract, 180)
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
  };

  useEffect(() => {
    loadPrices(startDate, endDate);
    setMinStartDate(calculateDate(endDate, CalculateActions.subtract, 360));
    setMinEndDate(calculateDate(startDate, CalculateActions.add, 7));
    setMaxStartDate(calculateDate(endDate, CalculateActions.subtract, 7));
  }, [startDate, endDate]);

  useEffect(() => {
    chartData !== undefined && chartData !== null && chartData.labels.length > 0
      ? setLoading(false)
      : setLoading(true);
  }, [chartData]);

  return (
    <StyledChart>
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
      {!loading && chartData !== undefined && chartData !== null ? (
        <LineChart chartData={chartData} />
      ) : (
        <Loader />
      )}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
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
