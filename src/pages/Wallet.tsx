import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ICurrencyRate } from "interfaces/ICurrencyRate";
import { IWallet } from "interfaces/IWallet";
import { ITransaction } from "interfaces/ITransaction";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Chart from "components/pages/Wallet/parts/Chart";
import TotalBalance from "components/pages/Wallet/parts/TotalBalance";
import CurrenciesBalance from "components/pages/Wallet/parts/CurrenciesBalance";
import Goals from "components/pages/Wallet/parts/Goals";
import TotalTransactions from "components/pages/Wallet/parts/TotalTransactions";

interface IProps {
  currenciesRates: ICurrencyRate[];
}

const Wallet: React.FC<IProps> = ({ currenciesRates }) => {
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  return (
    <>
      <StyledPageTitle>Wallet</StyledPageTitle>
      <>
        <StyledBox>
          <StyledColumn>
            <TotalBalance
              currencies={wallet.currencies}
              currenciesRates={currenciesRates}
            />
            <CurrenciesBalance currencies={wallet.currencies} />
          </StyledColumn>
          <StyledColumn>
            <Chart currencies={wallet.currencies} />
          </StyledColumn>
          <StyledColumn>
            <TotalTransactions
              transactions={transactions}
              currenciesRates={currenciesRates}
            />
          </StyledColumn>
          <Goals
            goals={wallet.goals}
            currencies={wallet.currencies}
            currenciesRates={currenciesRates}
          />
        </StyledBox>
      </>
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
    &:nth-child(3) {
      justify-content: space-between;
      flex-grow: 1;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: calc(37.5% - 16px);
    &:nth-child(2) {
      flex-basis: 25%;
    }
    &:nth-child(3) {
      flex-grow: 0;
    }
  }
`;
