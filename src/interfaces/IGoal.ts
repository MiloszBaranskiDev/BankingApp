import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

export interface IGoal {
  title: string;
  currencySymbol: ECurrenciesSymbols;
  targetAmount: number;
}
