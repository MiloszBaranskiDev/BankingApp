import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ITransaction } from "interfaces/ITransaction";
import { ETransactionCategory } from "enums/ETransactionCategory";

const TotalIncomes: React.FC = () => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  //   transactions.forEach((transaction) => {
  //     if (transaction.category === ETransactionCategory.incoming) {
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
