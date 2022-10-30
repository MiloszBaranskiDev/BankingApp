import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISettings } from "interfaces/ISettings";
import { ESettingsKey } from "enums/ESettingsKey";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

interface IPayload {
  key: ESettingsKey;
  value: string | boolean;
}

const initialState: ISettings = {
  [ESettingsKey.isLightMode]: true,
  [ESettingsKey.mainColor]: "#70a1ff",
  [ESettingsKey.bgcColor]: "white",
  [ESettingsKey.bgcDarkColor]: "#f7f9fb",
  [ESettingsKey.favouriteCurrency]: ECurrencySymbol.eur,
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

    restoreApp: (state) => {
      // store.ts will restart the store when this is fired up
    },
  },
});

export const { updateSettings, restoreApp } = SettingsSlice.actions;

export default SettingsSlice.reducer;
