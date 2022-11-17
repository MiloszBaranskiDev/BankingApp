import { ETransationType } from "enums/ETransactionType";
import { ICurrencyRate } from "interfaces/ICurrencyRate";
import { ITransaction } from "interfaces/ITransaction";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

const GetConvertedIncomesOrOutcomes = (
  transactionType: Exclude<ETransationType, ETransationType.swap>,
  transactions: ITransaction[],
  currenciesRates: ICurrencyRate[]
): number => {
  let result: number = 0;

  transactions
    .filter((transaction) => transaction.type === transactionType)
    .map((transaction) => {
      return (result +=
        transaction.currencySymbol === ECurrencySymbol.pln
          ? transaction.amount! * 1
          : transaction.amount! *
            currenciesRates.find(
              (currencyRate) =>
                currencyRate.symbol === transaction.currencySymbol
            )?.price!);
    });

  return Number(result.toFixed(2));
};

export default GetConvertedIncomesOrOutcomes;
