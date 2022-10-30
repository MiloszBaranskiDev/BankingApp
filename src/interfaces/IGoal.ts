import { ECurrencySymbol } from "enums/ECurrencySymbol";

export interface IGoal {
  title: string;
  currencySymbol: ECurrencySymbol;
  targetAmount: number;
  currentAmount: number;
  id: string;
}
