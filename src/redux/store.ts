import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import TransactionsSlice from "./slices/TransactionsSlice";
import UserSlice from "./slices/UserSlice";
import WalletSlice from "./slices/WalletSlice";
import NotificationsSlice from "./slices/NotificationsSlice";
import SettingsSlice from "./slices/SettingsSlice";

const combinedReducer = combineReducers({
  user: UserSlice,
  wallet: WalletSlice,
  transactions: TransactionsSlice,
  notifications: NotificationsSlice,
  settings: SettingsSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "SettingsSlice/restoreApp") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;
