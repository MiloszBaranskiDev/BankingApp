import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrency } from "interfaces/ICurrency";
import { IWallet } from "interfaces/IWallet";
import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

const initialState: IWallet = {
  currencies: [
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
  ],
  goals: [
    {
      title: "test",
      currencySymbol: ECurrenciesSymbols.pln,
      targetAmount: 423342423423423423432432443243243243242342334234234234234234,
    },
  ],
};

// const initialState: ICurrency[] = [
//   {
//     symbol: ECurrenciesSymbols.pln,
//     balance: 4500,
//   },
//   {
//     symbol: ECurrenciesSymbols.eur,
//     balance: 1337,
//   },
//   {
//     symbol: ECurrenciesSymbols.usd,
//     balance: 440,
//   },
//   {
//     symbol: ECurrenciesSymbols.gbp,
//     balance: 280.08,
//   },
//   {
//     symbol: ECurrenciesSymbols.chf,
//     balance: 99.12,
//   },
// ];

export const WalletSlice = createSlice({
  name: "WalletSlice",
  initialState,
  reducers: {
    // updateWallet: (state, action: PayloadAction<ICurrency>) => {
    //   const { symbol, balance } = action.payload;
    //   const index: number = state.findIndex((item) => item.symbol === symbol);
    //   state[index].balance = balance;
    // },
    updateWallet: (state, action: PayloadAction<ICurrency>) => {
      const { symbol, balance } = action.payload;
      const index: number = state.currencies.findIndex(
        (item) => item.symbol === symbol
      );
      state.currencies[index].balance = balance;
    },
  },
});

export const { updateWallet } = WalletSlice.actions;

export default WalletSlice.reducer;
