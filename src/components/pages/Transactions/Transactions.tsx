import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ITransaction } from "interfaces/ITransaction";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Accordion from "components/Accordion";

const Transactions: React.FC = () => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  return (
    <>
      <StyledPageTitle>Transactions</StyledPageTitle>
      {transactions.length > 0 && (
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
