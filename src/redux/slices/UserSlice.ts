import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "interfaces/IUser";
import { EUserKey } from "enums/EUserKey";

const initialState: IUser = {
  [EUserKey.name]: "John Smith",
  [EUserKey.email]: "john@example.com",
  [EUserKey.phone]: "123456789",
  [EUserKey.address]: "Lorem address 13",
  [EUserKey.image]: "/user_image.webp",
};

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<{ updatedUser: IUser }>) => {
      const { updatedUser } = action.payload;
      return (state = updatedUser);
    },
  },
});

export const { editUser } = UserSlice.actions;

export default UserSlice.reducer;
