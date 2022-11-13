import { ECurrencySymbol } from "enums/ECurrencySymbol";

export interface ICurrencyRate {
  symbol: ECurrencySymbol;
  price: number;
}
