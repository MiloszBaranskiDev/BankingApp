import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ITransaction } from "interfaces/ITransaction";
import { TransactionCategory } from "enums/TransactionCategory";

const TotalIncomes: React.FC = () => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  //   transactions.forEach((transaction) => {
  //     if (transaction.category === TransactionCategory.incoming) {
  //       console.log(
  //         transaction.details.find(
  //           (detail) => detail.label.toLowerCase() === "amount"
  //         )
  //       )!.value;
  //     }
  //   });

  return (
    <div>
      <p></p>
    </div>
  );
};

export default TotalIncomes;
