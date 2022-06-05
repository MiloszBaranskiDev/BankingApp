import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
