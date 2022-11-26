import { ECurrencySymbol } from "enums/ECurrencySymbol";

export interface ICurrencyRate {
  symbol: Exclude<ECurrencySymbol, ECurrencySymbol.pln>;
  price: number;
}
