import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ITransaction } from "interfaces/ITransaction";

import TransactionsList from "components/pages/Transactions/parts/TransactionsList";
import StyledPageTitle from "components/styled/StyledPageTitle";

const Transactions: React.FC = () => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  return (
    <>
      <StyledPageTitle>Transactions</StyledPageTitle>
      <TransactionsList transactions={transactions} />
    </>
  );
};

export default Transactions;
