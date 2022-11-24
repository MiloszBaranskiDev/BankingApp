import { EThemeKey } from "enums/EThemeKey";
import { EThemeColorKey } from "enums/EThemeColorKey";

export interface ITheme {
  [EThemeKey.isLight]: boolean;
  [EThemeKey.colors]: {
    [key in EThemeColorKey]: string;
  };
  [EThemeKey.typography]: {
    [key: string]: string | number;
  };
  [EThemeKey.breakpoints]: {
    [key: string]: string;
  };
  [EThemeKey.radius]: string;
  [EThemeKey.shadow]: string;
  [EThemeKey.tilePadding]: string;
}
