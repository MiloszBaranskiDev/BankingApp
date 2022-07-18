import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency } from "interfaces/ICurrency";

const initialState: ICurrency[] = [
  {
    symbol: "PLN",
    amount: 4500,
  },
  {
    symbol: "EUR",
    amount: 1337,
  },
  {
    symbol: "USD",
    amount: 440,
  },
  {
    symbol: "GBP",
    amount: 280.08,
  },
  {
    symbol: "CHF",
    amount: 99.12,
  },
];

export const WalletSlice = createSlice({
  name: "WalletSlice",
  initialState,
  reducers: {
    updateWallet: (state, action: PayloadAction<ICurrency>) => {
      const { symbol, amount } = action.payload;
      const index: number = state.findIndex((item) => item.symbol === symbol);
      state[index].amount = amount;
    },
  },
});

export const { updateWallet } = WalletSlice.actions;

export default WalletSlice.reducer;
