import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { ICurrency } from "interfaces/ICurrency";

import StyledHeading from "components/styled/StyledHeading";

interface Props {
  wallet: ICurrency[];
}

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

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: React.FC<Props> = ({ wallet }) => {
  const chartData: IChartData = {
    labels: wallet
      .filter((currency) => currency.amount! >= 0.01)
      .map((currency) => currency.symbol),
    datasets: [
      {
        data: wallet
          .filter((currency) => currency.amount! >= 0.01)
          .map((currency) => currency.amount!),
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

  return (
    <StyledChart>
      <StyledHeading>Currencies</StyledHeading>
      {wallet.some((currency) => currency.amount! >= 0.01) ? (
        <Doughnut data={chartData} />
      ) : (
        <p>
          The chart is currently unavailable because you don't have any
          currencies.
        </p>
      )}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
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
