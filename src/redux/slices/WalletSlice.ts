import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrency } from "interfaces/ICurrency";
import { IGoal } from "interfaces/IGoal";
import { IWallet } from "interfaces/IWallet";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

const initialState: IWallet = {
  currencies: [
    {
      symbol: ECurrencySymbol.pln,
      balance: 4500,
    },
    {
      symbol: ECurrencySymbol.eur,
      balance: 1337,
    },
    {
      symbol: ECurrencySymbol.usd,
      balance: 440,
    },
    {
      symbol: ECurrencySymbol.gbp,
      balance: 280.08,
    },
    {
      symbol: ECurrencySymbol.chf,
      balance: 99.12,
    },
  ],
  goals: [
    {
      title: "Holidays",
      currencySymbol: ECurrencySymbol.eur,
      targetAmount: 1000,
      currentAmount: 725.5,
      id: "2r6aeb1d-4b4d-4bad-2bda-7b0d3b3dcb2d",
    },
    {
      title: "Car",
      currencySymbol: ECurrencySymbol.pln,
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
        (currency) => currency.symbol === symbol
      );
      state.currencies[index].balance = balance;
    },

    addWalletGoal: (state, action: PayloadAction<IGoal>) => {
      const { title, currencySymbol, targetAmount, currentAmount, id } =
        action.payload;
      state.goals.push({
        title: title,
        currencySymbol: currencySymbol,
        targetAmount: targetAmount,
        currentAmount: currentAmount,
        id: id,
      });
    },

    updateWalletGoal: (state, action: PayloadAction<IGoal>) => {
      const goal = action.payload;
      const index: number = state.goals.findIndex(
        (item) => item.id === goal.id
      );
      state.goals[index] = goal;
    },

    removeWalletGoal: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return {
        ...state,
        goals: state.goals.filter((goal) => goal.id !== id),
      };
    },
  },
});

export const {
  updateWalletCurrencies,
  addWalletGoal,
  updateWalletGoal,
  removeWalletGoal,
} = WalletSlice.actions;

export default WalletSlice.reducer;
