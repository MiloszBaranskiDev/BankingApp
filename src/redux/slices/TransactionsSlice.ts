import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";
import { ITransaction } from "interfaces/ITransaction";
import { TransactionCategory } from "enums/TransactionCategory";

const initialState: ITransaction[] = [
  {
    category: TransactionCategory.outgoing,
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
        value: ECurrenciesSymbols.pln,
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
    category: TransactionCategory.incoming,
    date: "2022-06-12",
    id: "2r6aeb1d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: [
      {
        label: "Sender",
        value: "John Bloggs",
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
        value: ECurrenciesSymbols.pln,
      },
      {
        label: "Amount",
        value: 1250,
      },
      {
        label: "Title",
        value: "Rent",
      },
    ],
  },
  {
    category: TransactionCategory.swap,
    date: "2022-06-13",
    id: "3r3deb3d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: [
      {
        label: "From",
        value: `88 ${ECurrenciesSymbols.usd.toUpperCase()}`,
      },
      {
        label: "To",
        value: `396 ${ECurrenciesSymbols.pln.toUpperCase()}`,
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
