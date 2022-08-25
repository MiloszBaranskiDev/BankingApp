import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISettings } from "interfaces/ISettings";
import { ESettingsKeys } from "enums/ESettingsKeys";
import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

interface IPayload {
  key: ESettingsKeys;
  value: string | boolean;
}

const initialState: ISettings = {
  [ESettingsKeys.isLightMode]: true,
  [ESettingsKeys.mainColor]: "#70a1ff",
  [ESettingsKeys.bgcColor]: "white",
  [ESettingsKeys.bgcDarkColor]: "#f7f9fb",
  [ESettingsKeys.favouriteCurrency]: ECurrenciesSymbols.eur,
};

export const SettingsSlice = createSlice({
  name: "SettingsSlice",
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<IPayload>) => {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
  },
});

export const { updateSettings } = SettingsSlice.actions;

export default SettingsSlice.reducer;
