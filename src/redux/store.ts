import {
  configureStore,
  combineReducers,
  // eslint-disable-next-line
  getDefaultMiddleware,
  CombinedState,
  AnyAction,
} from "@reduxjs/toolkit";
import TransactionsSlice from "./slices/TransactionsSlice";
import UserSlice from "./slices/UserSlice";
import WalletSlice from "./slices/WalletSlice";
import NotificationsSlice from "./slices/NotificationsSlice";
import SettingsSlice from "./slices/SettingsSlice";
import { INotification } from "interfaces/INotification";
import { ISettings } from "interfaces/ISettings";
import { ITransaction } from "interfaces/ITransaction";
import { IUser } from "interfaces/IUser";
import { IWallet } from "interfaces/IWallet";

const combinedReducer = combineReducers({
  user: UserSlice,
  wallet: WalletSlice,
  transactions: TransactionsSlice,
  notifications: NotificationsSlice,
  settings: SettingsSlice,
});

const rootReducer = (
  state:
    | CombinedState<{
        user: IUser;
        wallet: IWallet;
        transactions: ITransaction[];
        notifications: INotification[];
        settings: ISettings;
      }>
    | undefined,
  action: AnyAction
) => {
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
