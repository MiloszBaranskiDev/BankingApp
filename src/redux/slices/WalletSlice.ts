import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency } from "interfaces/ICurrency";

import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

const initialState: ICurrency[] = [
  {
    symbol: ECurrenciesSymbols.pln,
    balance: 4500,
  },
  {
    symbol: ECurrenciesSymbols.eur,
    balance: 1337,
  },
  {
    symbol: ECurrenciesSymbols.usd,
    balance: 440,
  },
  {
    symbol: ECurrenciesSymbols.gbp,
    balance: 280.08,
  },
  {
    symbol: ECurrenciesSymbols.chf,
    balance: 99.12,
  },
];

export const WalletSlice = createSlice({
  name: "WalletSlice",
  initialState,
  reducers: {
    updateWallet: (state, action: PayloadAction<ICurrency>) => {
      const { symbol, balance } = action.payload;
      const index: number = state.findIndex((item) => item.symbol === symbol);
      state[index].balance = balance;
    },
  },
});

export const { updateWallet } = WalletSlice.actions;

export default WalletSlice.reducer;
