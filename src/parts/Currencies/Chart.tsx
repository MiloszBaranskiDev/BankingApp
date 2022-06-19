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
import Loader from "elements/Loader";
import S_Heading from "elements/layout/S_Heading";
import ChartDates from "elements/Currencies/ChartDates";
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

const S_Chart = styled.div`
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

const Chart: React.FC<Props> = ({ symbol }) => {
  const theme: any = useTheme();
  const [loading, setLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<IChartData>(null as any);
  const [startDate, setStartDate] = useState<string>("2022-01-01");
  const [endDate, setEndDate] = useState<string>(GetTodayDate());

  let test: Date | string = new Date();
  test.setDate(test.getDate() - 19);
  test = test.toISOString().split("T")[0];

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
  }, [startDate, endDate]);

  useEffect(() => {
    chartData !== null && chartData.labels.length > 0
      ? setLoading(false)
      : setLoading(true);
  }, [chartData]);

  return (
    <S_Chart>
      <S_Heading>{symbol}/PLN</S_Heading>
      <ChartDates
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {!loading && chartData !== null ? (
        <Line options={options} data={chartData} />
      ) : (
        <Loader />
      )}
    </S_Chart>
  );
};

export default Chart;
