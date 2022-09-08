import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

export interface ICurrency {
  symbol: ECurrenciesSymbols;
  balance?: number;
  price?: number;
}
