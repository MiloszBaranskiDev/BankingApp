import { ITheme } from "interfaces/ITheme";

const DefaultTheme: ITheme = {
  isLight: true,
  colors: {
    main: null as any,
    bgc: null as any,
    bgc_dark: null as any,
    green: "#44bd32",
    red: "#eb4d4b",
    typography: "#a6afc0",
  },
  typography: {
    size_small: "14px",
    size_normal: "16px",
    size_big: "20px",
    size_extra_small: "12px",
    size_extra_big: "24px",
    size_title: "32px",
    weight_normal: 400,
    weight_bold: 600,
  },
  breakpoints: {
    mobile_big: "480px",
    tablet: "768px",
    desktop: "1260px",
  },
  radius: "10px",
  shadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
  tilePadding: "30px",
};

export default DefaultTheme;
