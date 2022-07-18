import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserField } from "interfaces/IUserField";

interface IPayload {
  label: string;
  value: string;
}

const initialState: IUserField[] = [
  {
    label: "login",
    type: "text",
    value: "user",
  },
  {
    label: "e-mail",
    type: "email",
    value: "user@email.com",
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
    editUser: (state, action: PayloadAction<IPayload>) => {
      const { label, value } = action.payload;
      const index: number = state.findIndex((item) => item.label === label);
      state[index].value = value;
    },
  },
});

export const { editUser } = UserSlice.actions;

export default UserSlice.reducer;
