import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import WalletSlice from "./slices/WalletSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    wallet: WalletSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
