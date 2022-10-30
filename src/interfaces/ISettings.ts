import { ESettingsKey } from "enums/ESettingsKey";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

export interface ISettings {
  [ESettingsKey.isLightMode]: boolean;
  [ESettingsKey.mainColor]: string;
  [ESettingsKey.bgcColor]: string;
  [ESettingsKey.bgcDarkColor]: string;
  [ESettingsKey.favouriteCurrency]: Exclude<
    ECurrencySymbol,
    ECurrencySymbol.pln
  >;
}
