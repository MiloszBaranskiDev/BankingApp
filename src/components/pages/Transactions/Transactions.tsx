import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import StyledPageTitle from "components/styled/StyledPageTitle";
import Accordion from "components/Accordion";

interface ITransaction {
  category: string;
  id: number;
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
      {transactions && (
        <ul>
          {transactions
            .slice(0)
            .reverse()
            .map((transaction) => (
              <Accordion
                key={transaction.id}
                top={transaction.category + " / " + transaction.date}
                content={transaction}
              />
            ))}
        </ul>
      )}
    </>
  );
};

export default Transactions;
