import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import S_Heading from "elements/layout/S_Heading";

interface IChartData {
  labels: string[];
  datasets: [
    {
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }
  ];
}

const S_Chart = styled.div`
  flex-basis: 100%;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  canvas {
    height: auto !important;
    width: 100% !important;
  }
`;

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData: IChartData = {
  labels: ["PLN", "EUR", "USD", "GBP", "CHF"],
  datasets: [
    {
      data: [30, 12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 102, 0, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 102, 0, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Chart: React.FC = () => {
  return (
    <S_Chart>
      <S_Heading>Currencies</S_Heading>
      <Doughnut data={chartData} />
    </S_Chart>
  );
};

export default Chart;
