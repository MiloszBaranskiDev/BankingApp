import { configureStore } from "@reduxjs/toolkit";
import TransactionsSlice from "./slices/TransactionsSlice";
import UserSlice from "./slices/UserSlice";
import WalletSlice from "./slices/WalletSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    wallet: WalletSlice,
    transactions: TransactionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
