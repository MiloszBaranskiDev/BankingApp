import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import S_PageTitle from "elements/layout/S_PageTitle";

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
      <S_PageTitle>Transactions</S_PageTitle>
      {transactions && <div>soon</div>}
    </>
  );
};

export default Transactions;
