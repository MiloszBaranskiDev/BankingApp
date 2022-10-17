import { useState, useEffect } from "react";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";
import { IWallet } from "interfaces/IWallet";
import { ICurrency } from "interfaces/ICurrency";

import GetCurrenciesPrices from "api/GetCurrenciesPrices";

import StyledPageTitle from "components/styled/StyledPageTitle";
import StyledHeading from "components/styled/StyledHeading";
import Loader from "components/Loader";
import Tiles from "components/pages/Currencies/parts/Tiles";
import Swap from "components/pages/Currencies/parts/Swap";
import Chart from "components/pages/Currencies/parts/Chart";

interface ILoadPrices {
  (currencies: ICurrency[]): Promise<void>;
}

const excludePLN = (currencies: ICurrency[]): ICurrency[] => {
  return currencies.filter(
    (currency) => currency.symbol !== ECurrenciesSymbols.pln
  );
};

const Currencies: React.FC = () => {
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>(
    wallet.currencies.map((currency) => currency)
  );

  const loadPrices: ILoadPrices = async (currencies) => {
    const loadedData = await GetCurrenciesPrices(excludePLN(currencies));
    setCurrencies([
      wallet.currencies.find((currency) => currency.symbol === "PLN")!,
      ...loadedData!,
    ]);
  };

  useEffect(() => {
    loadPrices(excludePLN(currencies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    excludePLN(currencies)[excludePLN(currencies).length - 1].price !==
    undefined
      ? setIsLoading(false)
      : setIsLoading(true);
  }, [currencies]);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!isLoading ? (
        <>
          <Tiles currencies={excludePLN(currencies)} />
          {currencies.filter((currency) => currency.balance! >= 0.01).length >=
            2 && (
            <>
              <StyledHeading>Swap currencies</StyledHeading>
              <Swap currencies={currencies} />
            </>
          )}
          {excludePLN(currencies).map((currency) => (
            <Chart
              currencySymbol={
                currency.symbol as Exclude<
                  ECurrenciesSymbols,
                  ECurrenciesSymbols.pln
                >
              }
              key={currency.symbol}
            />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Currencies;
