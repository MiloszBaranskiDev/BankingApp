import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "interfaces/ITransaction";

const initialState: ITransaction[] = [
  {
    category: "Outgoing transfer",
    date: "2022-06-11",
    id: "6r6deb4d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: [
      {
        label: "Recipient",
        value: "John Smith",
      },
      {
        label: "Account No.",
        value: "123456789987654321",
      },
      {
        label: "Address",
        value: "Lorem ipsum 16/4",
      },
      {
        label: "Currency",
        value: "PLN",
      },
      {
        label: "Amount",
        value: 400,
      },
      {
        label: "Title",
        value: "Car repair",
      },
    ],
  },
  {
    category: "Currency swap",
    date: "2022-06-13",
    id: "3r3deb3d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: [
      {
        label: "From",
        value: "88 USD",
      },
      {
        label: "To",
        value: "396 PLN",
      },
      {
        label: "Exchange rate",
        value: "4.5",
      },
    ],
  },
];

export const TransactionsSlice = createSlice({
  name: "TransactionsSlice",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      const { category, date, id, details } = action.payload;
      state.push({ category: category, date: date, id: id, details: details });
    },
  },
});

export const { addTransaction } = TransactionsSlice.actions;

export default TransactionsSlice.reducer;
