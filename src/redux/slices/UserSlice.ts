import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserField } from "interfaces/IUserField";

const initialState: IUserField[] = [
  {
    label: "login",
    type: "text",
    value: "John",
  },
  {
    label: "e-mail",
    type: "email",
    value: "john@example.com",
  },
  {
    label: "phone",
    type: "number",
    value: "123456789",
  },
  {
    label: "address",
    type: "text",
    value: "Lorem address",
  },
  {
    label: "image",
    type: null as any,
    value: "/user_image.webp",
  },
];

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<{ updatedArr: IUserField[] }>) => {
      const { updatedArr } = action.payload;
      return (state = updatedArr);
    },
  },
});

export const { editUser } = UserSlice.actions;

export default UserSlice.reducer;
