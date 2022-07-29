import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ICurrency } from "interfaces/ICurrency";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Chart from "./parts/Chart";
import TotalBalance from "./parts/TotalBalance";
import CurrenciesBalance from "./parts/CurrenciesBalance";
import Incomes from "./parts/Incomes";
import Expenses from "./parts/Expenses";

const Wallet: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  return (
    <>
      <StyledPageTitle>Wallet</StyledPageTitle>
      <StyledBox>
        <StyledColumn>
          <TotalBalance wallet={wallet} />
          <CurrenciesBalance wallet={wallet} />
        </StyledColumn>
        <StyledColumn>
          <Chart wallet={wallet} />
        </StyledColumn>
        <StyledColumn>
          <Incomes />
          <Expenses />
        </StyledColumn>
      </StyledBox>
    </>
  );
};

export default Wallet;

const StyledBox = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;

const StyledColumn = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: calc(37.5% - 16px);
    &:nth-child(2) {
      flex-basis: 25%;
    }
  }
`;
