import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ETransationType } from "enums/ETransactionType";
import { ETransferKey } from "enums/ETransferKey";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ITransaction } from "interfaces/ITransaction";
import { ETransactionCategory } from "enums/ETransactionCategory";

const initialState: ITransaction[] = [
  {
    type: ETransationType.outcome,
    category: ETransactionCategory.outgoingTransfer,
    currencySymbol: ECurrencySymbol.pln,
    amount: 1200,
    date: "2022-06-11",
    id: "6r6deb4d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: {
      [ETransferKey.title]: "Car repair",
      [ETransferKey.recipient]: "John Smith",
      [ETransferKey.account]: "412456789987654321",
      [ETransferKey.address]: "Lorem ipsum 11/2",
      [ETransferKey.currencySymbol]: ECurrencySymbol.pln,
      [ETransferKey.amount]: 1200,
    },
  },
  {
    type: ETransationType.income,
    category: ETransactionCategory.incomingTransfer,
    currencySymbol: ECurrencySymbol.pln,
    amount: 3000,
    date: "2022-06-12",
    id: "2r6aeb1d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: {
      [ETransferKey.title]: "Rent",
      [ETransferKey.sender]: "John Bloggs",
      [ETransferKey.account]: "123456789987654321",
      [ETransferKey.address]: "Lorem ipsum 16/4",
      [ETransferKey.currencySymbol]: ECurrencySymbol.pln,
      [ETransferKey.amount]: 3000,
    },
  },
  {
    type: ETransationType.swap,
    category: ETransactionCategory.swap,
    currencySymbol: null,
    amount: null,
    date: "2022-06-13",
    id: "3r3deb3d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    details: {
      from: `88 ${ECurrencySymbol.usd.toUpperCase()}`,
      to: `396 ${ECurrencySymbol.pln.toUpperCase()}`,
      rate: 4.5,
    },
  },
  {
    type: ETransationType.income,
    category: ETransactionCategory.goalCancel,
    currencySymbol: ECurrencySymbol.eur,
    amount: 400,
    date: "2022-06-19",
    id: "1r7adb7d-2b4d-1dad-4bca-1b0d7b3dcb6d",
    details: {
      title: "Phone",
      returned: `400 ${ECurrencySymbol.eur}`,
    },
  },
];

export const TransactionsSlice = createSlice({
  name: "TransactionsSlice",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      const { type, category, currencySymbol, amount, date, id, details } =
        action.payload;
      state.push({
        type: type,
        category: category,
        currencySymbol: currencySymbol,
        amount: amount,
        date: date,
        id: id,
        details: details,
      });
    },
  },
});

export const { addTransaction } = TransactionsSlice.actions;

export default TransactionsSlice.reducer;
