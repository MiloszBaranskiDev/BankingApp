import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import styled from "styled-components";

import { IWallet } from "interfaces/IWallet";
import { ITransaction } from "interfaces/ITransaction";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Chart from "components/pages/Home/parts/Chart";
import WalletTiles from "components/pages/Home/parts/WalletTiles";
import LastTransactions from "components/pages/Home/parts/LastTransactions";
import AdditionalNav from "components/pages/Home/parts/AdditionalNav";
import Goals from "components/pages/Home/parts/Goals";

interface IProps {
  currenciesRates: ICurrencyRate[];
}

const Home: React.FC<IProps> = ({ currenciesRates }) => {
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  return (
    <>
      <StyledPageTitle>Home</StyledPageTitle>
      <WalletTiles
        currencies={wallet.currencies}
        currenciesRates={currenciesRates}
        transactions={transactions}
      />
      <StyledRow>
        <Chart />
        <LastTransactions transactions={transactions} />
      </StyledRow>
      <StyledRow>
        <Goals goals={wallet.goals} />
        <AdditionalNav />
      </StyledRow>
    </>
  );
};

export default Home;

const StyledRow = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;
