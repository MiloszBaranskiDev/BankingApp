import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITransaction {
  category: string;
  date: string;
  id: number;
  details: object[];
}

const initialState: ITransaction[] = [
  {
    category: "Outgoing transfer",
    date: "2022-06-11",
    id: 1943,
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
    id: 2581,
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
