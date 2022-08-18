import { ESettingsKeys } from "enums/SettingsKeys";
import { ECurrencies } from "enums/Currencies";

export interface ISettings {
  [ESettingsKeys.isLightMode]: boolean;
  [ESettingsKeys.mainColor]: string;
  [ESettingsKeys.bgcColor]: string;
  [ESettingsKeys.bgcDarkColor]: string;
  [ESettingsKeys.favouriteCurrency]: Exclude<ECurrencies, ECurrencies.pln>;
}
