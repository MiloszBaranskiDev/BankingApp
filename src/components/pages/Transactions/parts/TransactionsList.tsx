import TransactionListItem from "../elements/TransactionListItem";

import { ITransaction } from "interfaces/ITransaction";

interface IProps {
  transactions: ITransaction[];
}

const TransactionsList: React.FC<IProps> = ({ transactions }) => {
  return (
    <>
      {transactions.length > 0 && (
        <ul>
          {transactions
            .slice(0)
            .reverse()
            .map((transaction) => (
              <TransactionListItem
                key={transaction.id}
                transaction={transaction}
              />
            ))}
        </ul>
      )}
    </>
  );
};

export default TransactionsList;
