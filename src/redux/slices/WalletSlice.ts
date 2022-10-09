import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrency } from "interfaces/ICurrency";
import { IGoal } from "interfaces/IGoal";
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
      title: "Holidays",
      currencySymbol: ECurrenciesSymbols.eur,
      targetAmount: 1000,
      currentAmount: 725.5,
      id: "2r6aeb1d-4b4d-4bad-2bda-7b0d3b3dcb2d",
    },
    {
      title: "Car",
      currencySymbol: ECurrenciesSymbols.pln,
      targetAmount: 40000,
      currentAmount: 11350,
      id: "7r1aeb6d-2b2d-1bad-5bda-3b0d3b3dcb2d",
    },
  ],
};

export const WalletSlice = createSlice({
  name: "WalletSlice",
  initialState,
  reducers: {
    updateWalletCurrencies: (state, action: PayloadAction<ICurrency>) => {
      const { symbol, balance } = action.payload;
      const index: number = state.currencies.findIndex(
        (item) => item.symbol === symbol
      );
      state.currencies[index].balance = balance;
    },

    addWalletGoal: (state, action: PayloadAction<IGoal>) => {
      const { title, currencySymbol, targetAmount, currentAmount, id } =
        action.payload;
      state.goals.push({
        title: title,
        currencySymbol: currencySymbol,
        targetAmount: Number(targetAmount),
        currentAmount: Number(currentAmount),
        id: id,
      });
    },
  },
});

export const { updateWalletCurrencies, addWalletGoal } = WalletSlice.actions;

export default WalletSlice.reducer;
