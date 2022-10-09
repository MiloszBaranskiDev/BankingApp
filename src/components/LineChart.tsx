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

import { ILineChartData } from "interfaces/ILineChartData";

interface IProps {
  chartData: ILineChartData;
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

const LineChart: React.FC<IProps> = ({ chartData }) => {
  return (
    <StyledLineChart>
      <Line options={options} data={chartData} />
    </StyledLineChart>
  );
};

export default LineChart;

const StyledLineChart = styled.div`
  flex-basis: 100%;
  canvas {
    max-width: 100% !important;
  }
`;
