import { ETransationType } from "enums/ETransactionType";
import { ETransactionCategory } from "enums/ETransactionCategory";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

export interface ITransaction {
  type: ETransationType;
  category: ETransactionCategory;
  currencySymbol: ECurrencySymbol | null;
  amount: number | null;
  id: string;
  date: string;
  details: object;
}
