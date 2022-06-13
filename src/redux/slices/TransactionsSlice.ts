import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITransaction {
  category: string;
  date: string;
  details: object[];
}

const initialState: ITransaction[] = [
  {
    category: "Outgoing Transfer",
    date: "2022-06-11",
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
    details: [
      {
        label: "Lorem",
        value: "Lorem",
      },
    ],
  },
];

export const TransactionsSlice = createSlice({
  name: "TransactionsSlice",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      const { category, date, details } = action.payload;
      state.push({ category: category, date: date, details: details });
    },
  },
});

export const { addTransaction } = TransactionsSlice.actions;

export default TransactionsSlice.reducer;
