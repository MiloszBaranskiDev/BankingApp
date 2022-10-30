import { ECurrencySymbol } from "enums/ECurrencySymbol";

export interface ICurrency {
  symbol: ECurrencySymbol;
  balance?: number;
  price?: number;
}
