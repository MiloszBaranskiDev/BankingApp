import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import AppRouter from "./AppRouter";
import DefaultTheme from "./DefaultTheme";

import ScrollToTop from "helpers/ScrollToTop";

import GetCurrenciesPrices from "api/GetCurrenciesPrices";

import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ICurrencyRate } from "interfaces/ICurrencyRate";
import { IWallet } from "interfaces/IWallet";
import { ESettingsKey } from "enums/ESettingsKey";
import { ISettings } from "interfaces/ISettings";
import { ITheme } from "interfaces/ITheme";
import { EThemeKey } from "enums/EThemeKey";
import { EThemeColorKey } from "enums/EThemeColorKey";

import ApiError from "components/ApiError";
import LoaderBig from "components/LoaderBig";
import StyledWrapper from "components/styled/StyledWrapper";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer";

const App: React.FC = () => {
  const settings: ISettings = useSelector((state: RootState) => state.settings);
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  const [theme, setTheme] = useState<ITheme>(DefaultTheme);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);
  const [currenciesRates, setCurrenciesRates] = useState<ICurrencyRate[]>();

  const loadCurrenciesRates = async (): Promise<void> => {
    const loadedCurrenciesRates = await GetCurrenciesPrices(
      wallet.currencies.filter(
        (currency) => currency.symbol !== ECurrencySymbol.pln
      )
    );

    if (loadedCurrenciesRates === undefined) {
      setShowError(true);
      setIsLoading(false);
    } else {
      setCurrenciesRates(loadedCurrenciesRates);
    }
  };

  useEffect(() => {
    loadCurrenciesRates();
  }, []);

  useEffect(() => {
    if (
      currenciesRates !== null &&
      currenciesRates !== undefined &&
      currenciesRates.length > 0
    ) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [currenciesRates]);

  useEffect(() => {
    setTheme({
      ...theme,
      [EThemeKey.colors]: {
        ...theme[EThemeKey.colors],
        [EThemeColorKey.main]: settings[ESettingsKey.mainColor],
        [EThemeColorKey.bgc]: settings[ESettingsKey.isLightMode]
          ? "white"
          : "#1c1f27",
        [EThemeColorKey.bgc_dark]: settings[ESettingsKey.isLightMode]
          ? "#f7f9fb"
          : "#24282e",
      },
      [EThemeKey.shadow]: settings[ESettingsKey.isLightMode]
        ? "rgb(58 53 65 / 10%) 0px 2px 10px 0px"
        : "rgb(200 200 200 / 10%) 0px 2px 10px 0px",
    });
  }, [settings]);

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundColor: theme.colors.bgc_dark!,
        }}
      >
        <ThemeProvider theme={theme}>
          {isLoading && <LoaderBig />}
          {!isLoading && showError ? <ApiError /> : null}
          {!isLoading && !showError ? (
            <>
              <ScrollToTop />
              <Navbar />
              <StyledWrapper>
                <AppRouter currenciesRates={currenciesRates!} />
              </StyledWrapper>
              <Footer />
            </>
          ) : null}
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
