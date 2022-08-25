import { ESettingsKeys } from "enums/ESettingsKeys";
import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

export interface ISettings {
  [ESettingsKeys.isLightMode]: boolean;
  [ESettingsKeys.mainColor]: string;
  [ESettingsKeys.bgcColor]: string;
  [ESettingsKeys.bgcDarkColor]: string;
  [ESettingsKeys.favouriteCurrency]: Exclude<
    ECurrenciesSymbols,
    ECurrenciesSymbols.pln
  >;
}
