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

enum ELocalstorageKey {
  key = "reduxState",
}

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

const savedState = localStorage.getItem(ELocalstorageKey.key);

const loadStore = () => {
  let store;

  if (savedState) {
    store = configureStore({
      reducer: rootReducer,
      preloadedState: JSON.parse(savedState),
      middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    });
  } else {
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    });
  }

  return store;
};

export const store = loadStore();

store.subscribe(() => {
  localStorage.setItem(ELocalstorageKey.key, JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
