import { configureStore } from "@reduxjs/toolkit";
import TransactionsSlice from "./slices/TransactionsSlice";
import UserSlice from "./slices/UserSlice";
import WalletSlice from "./slices/WalletSlice";
import NotificationsSlice from "./slices/NotificationsSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    wallet: WalletSlice,
    transactions: TransactionsSlice,
    notifications: NotificationsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
