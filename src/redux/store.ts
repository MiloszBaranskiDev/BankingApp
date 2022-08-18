import { configureStore } from "@reduxjs/toolkit";
import TransactionsSlice from "./slices/TransactionsSlice";
import UserSlice from "./slices/UserSlice";
import WalletSlice from "./slices/WalletSlice";
import NotificationsSlice from "./slices/NotificationsSlice";
import SettingsSlice from "./slices/SettingsSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    wallet: WalletSlice,
    transactions: TransactionsSlice,
    notifications: NotificationsSlice,
    settings: SettingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
