import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency } from "interfaces/ICurrency";

const initialState: ICurrency[] = [
  {
    symbol: "PLN",
    balance: 4500,
  },
  {
    symbol: "EUR",
    balance: 1337,
  },
  {
    symbol: "USD",
    balance: 440,
  },
  {
    symbol: "GBP",
    balance: 280.08,
  },
  {
    symbol: "CHF",
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
