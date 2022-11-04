import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IWallet } from "interfaces/IWallet";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Chart from "components/pages/Wallet/parts/Chart";
import TotalBalance from "components/pages/Wallet/parts/TotalBalance";
import CurrenciesBalance from "components/pages/Wallet/parts/CurrenciesBalance";
import Incomes from "components/pages/Wallet/parts/Incomes";
import Expenses from "components/pages/Wallet/parts/Expenses";
import Goals from "components/pages/Wallet/parts/Goals";

const Wallet: React.FC = () => {
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  return (
    <>
      <StyledPageTitle>Wallet</StyledPageTitle>
      <StyledBox>
        <StyledColumn>
          <TotalBalance currencies={wallet.currencies} />
          <CurrenciesBalance currencies={wallet.currencies} />
        </StyledColumn>
        <StyledColumn>
          <Chart currencies={wallet.currencies} />
        </StyledColumn>
        <StyledColumn>
          <Incomes />
          <Expenses />
        </StyledColumn>
        <Goals goals={wallet.goals} currencies={wallet.currencies} />
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
