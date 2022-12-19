import { ETransationType } from "enums/ETransactionType";
import { ICurrencyRate } from "interfaces/ICurrencyRate";
import { ITransaction } from "interfaces/ITransaction";

import TotalTransactionsTile from "../elements/TotalTransactionsTile";

import GetConvertedIncomesOrOutcomes from "utils/GetConvertedIncomesOrOutcomes";

interface IProps {
  transactions: ITransaction[];
  currenciesRates: ICurrencyRate[];
}

interface ITile {
  transactionType: ETransationType;
  heading: string;
  amount: number;
}

const TotalTransactions: React.FC<IProps> = ({
  transactions,
  currenciesRates,
}) => {
  const tiles: ITile[] = [
    {
      transactionType: ETransationType.income,
      heading: "Total incomes*",
      amount: GetConvertedIncomesOrOutcomes(
        ETransationType.income,
        transactions,
        currenciesRates
      ),
    },
    {
      transactionType: ETransationType.outcome,
      heading: "Total outcomes*",
      amount:
        GetConvertedIncomesOrOutcomes(
          ETransationType.outcome,
          transactions,
          currenciesRates
        ) * -1,
    },
  ];

  return (
    <>
      {tiles.length > 0 && (
        <>
          {tiles.map((tile) => (
            <TotalTransactionsTile
              key={tile.heading}
              transactionType={tile.transactionType}
              heading={tile.heading}
              amount={tile.amount}
            />
          ))}
        </>
      )}
    </>
  );
};

export default TotalTransactions;
