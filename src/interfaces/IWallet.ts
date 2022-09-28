import { ICurrency } from "interfaces/ICurrency";
import { IGoal } from "interfaces/IGoal";

export interface IWallet {
  currencies: ICurrency[];
  goals: IGoal[];
}
