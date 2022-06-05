import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  login: string;
  email: string;
  phone: number;
  address: string;
  image: string;
}

const initialState: IUserState = {
  login: "user",
  email: "user@email.com",
  phone: +48123456789,
  address: "Example address",
  image: "/user_image.webp",
};

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1;
    },
    decrement: (state) => {
      // state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = UserSlice.actions;

export default UserSlice.reducer;
