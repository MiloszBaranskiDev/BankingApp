import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import StyledPageTitle from "components/layout/StyledPageTitle";

interface ITransaction {
  category: string;
  date: string;
  details: object[];
}

const Transactions: React.FC = () => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  console.log(transactions);

  return (
    <>
      <StyledPageTitle>Transactions</StyledPageTitle>
      {transactions && <div>soon</div>}
    </>
  );
};

export default Transactions;
