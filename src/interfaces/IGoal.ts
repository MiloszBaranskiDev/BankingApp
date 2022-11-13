import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { EGoalKey } from "enums/EGoalKey";

export interface IGoal {
  [EGoalKey.title]: string;
  [EGoalKey.currencySymbol]: ECurrencySymbol;
  [EGoalKey.targetAmount]: number;
  [EGoalKey.currentAmount]: number;
  [EGoalKey.id]: string;
}
