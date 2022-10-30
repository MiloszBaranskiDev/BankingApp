import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import AppRouter from "./AppRouter";
import DefaultTheme from "./DefaultTheme";

import ScrollToTop from "helpers/ScrollToTop";

import { ESettingsKey } from "enums/ESettingsKey";
import { ISettings } from "interfaces/ISettings";

import StyledWrapper from "components/styled/StyledWrapper";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer";

const App: React.FC = () => {
  const settings: ISettings = useSelector((state: RootState) => state.settings);
  const [theme, setTheme] = useState(DefaultTheme);

  useEffect(() => {
    setTheme({
      ...theme,
      colors: {
        ...theme.colors,
        main: settings[ESettingsKey.mainColor] as any,
        bgc: settings[ESettingsKey.isLightMode]
          ? ("white" as any)
          : ("#1c1f27" as any),
        bgc_dark: settings[ESettingsKey.isLightMode]
          ? ("#f7f9fb" as any)
          : ("#24282e" as any),
      },
      shadow: settings[ESettingsKey.isLightMode]
        ? "rgb(58 53 65 / 10%) 0px 2px 10px 0px"
        : "rgb(200 200 200 / 10%) 0px 2px 10px 0px",
    });
  }, [settings]);

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: theme.colors.bgc_dark! }}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <Navbar />
          <StyledWrapper>
            <AppRouter />
          </StyledWrapper>
          <Footer />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
