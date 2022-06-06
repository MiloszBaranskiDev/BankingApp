import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICurrency {
  symbol: string;
  amount: number;
}

const initialState: ICurrency[] = [
  {
    symbol: "PLN",
    amount: 1337,
  },
  {
    symbol: "EUR",
    amount: 200,
  },
  {
    symbol: "USD",
    amount: 120,
  },
  {
    symbol: "GBP",
    amount: 80.08,
  },
  {
    symbol: "CHF",
    amount: 40.12,
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
