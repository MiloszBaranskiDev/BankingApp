import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import StyledHeading from "elements/layout/StyledHeading";

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

const StyledChart = styled.div`
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  canvas {
    height: auto !important;
    width: 100% !important;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 40%;
    margin-right: auto;
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
    <StyledChart>
      <StyledHeading>Currencies</StyledHeading>
      <Doughnut data={chartData} />
    </StyledChart>
  );
};

export default Chart;
