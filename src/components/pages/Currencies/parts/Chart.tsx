import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled, { useTheme } from "styled-components";
import Loader from "components/Loader";
import StyledHeading from "components/layout/StyledHeading";
import ChartDates from "../elements/ChartDates";
import GetTodayDate from "utils/GetTodayDate";
import GetCurrencyHistoricalPrices from "api/GetCurrencyHistoricalPrices";

interface Props {
  symbol: string;
}

interface IChartData {
  labels: number[];
  datasets: [
    {
      borderWidth: number;
      borderColor: any;
      backgroundColor: any;
      data: number[];
    }
  ];
}

enum CalculateActions {
  add = "add",
  subtract = "subract",
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const options: object = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 1.65,
    },
  },
};

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

const Chart: React.FC<Props> = ({ symbol }) => {
  const theme: any = useTheme();

  const [loading, setLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<IChartData>(null as any);

  const [endDate, setEndDate] = useState<string>(GetTodayDate());
  const [startDate, setStartDate] = useState<string>(
    calculateDate(endDate, CalculateActions.subtract, 180)
  );

  const [minStartDate, setMinStartDate] = useState<string>();
  const [minEndDate, setMinEndDate] = useState<string>();
  const [maxStartDate, setMaxStartDate] = useState<string>();

  const loadPrices = async (start: string, end: string) => {
    const loadedPrices = await GetCurrencyHistoricalPrices(symbol, start, end);
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
    chartData !== null && chartData.labels.length > 0
      ? setLoading(false)
      : setLoading(true);
  }, [chartData]);

  return (
    <StyledChart>
      <StyledHeading>{symbol}/PLN</StyledHeading>
      <ChartDates
        startDate={startDate}
        endDate={endDate}
        minStartDate={minStartDate!}
        minEndDate={minEndDate!}
        maxStartDate={maxStartDate!}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {!loading && chartData !== null ? (
        <Line options={options} data={chartData} />
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
