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
import styled from "styled-components";
import StyledHeading from "elements/layout/StyledHeading";
import ChartDates from "elements/Currencies/ChartDates";
import GetTodayDate from "utils/GetTodayDate";
import GetCurrencyHistoricalPrices from "utils/api/GetCurrencyHistoricalPrices";

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

const StyledChart = styled.div`
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  h2 {
    text-transform: uppercase;
  }
`;

const Chart: React.FC<Props> = ({ symbol }) => {
  const [data, setData] = useState<IChartData>(null as any);
  const [startDate, setStartDate] = useState<string>("2022-01-01");
  const [endDate, setEndDate] = useState<string>(GetTodayDate());

  const loadPrices = async (start: string, end: string) => {
    // const loadedPrices = await GetCurrencyHistoricalPrices(symbol, start, end);
    // setData(loadedPrices!);
    console.log(GetCurrencyHistoricalPrices(symbol, start, end));
  };

  useEffect(() => {
    loadPrices(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <StyledChart>
      <StyledHeading>{symbol}/PLN</StyledHeading>
      <ChartDates
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {/* {data !== null && <Line options={options} data={data} />} */}
    </StyledChart>
  );
};

export default Chart;
