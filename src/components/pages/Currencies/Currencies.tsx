import { useState, useEffect } from "react";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";
import { ICurrency } from "interfaces/ICurrency";

import GetCurrenciesPrices from "api/GetCurrenciesPrices";

import StyledPageTitle from "components/styled/StyledPageTitle";
import StyledHeading from "components/styled/StyledHeading";
import Loader from "components/Loader";
import Tiles from "./parts/Tiles";
import Swap from "./parts/Swap";
import Chart from "./parts/Chart";

interface ILoadPrices {
  (currencies: ICurrency[]): Promise<void>;
}

const excludePLN = (currencies: ICurrency[]) => {
  return currencies.filter(
    (currency) => currency.symbol !== ECurrenciesSymbols.pln
  );
};

const Currencies: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>(
    wallet.map((currency) => currency)
  );

  const loadPrices: ILoadPrices = async (currencies) => {
    const loadedData = await GetCurrenciesPrices(excludePLN(currencies));
    setCurrencies([
      wallet.find((currency) => currency.symbol === "PLN")!,
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
      ? setLoading(false)
      : setLoading(true);
  }, [currencies]);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!loading ? (
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
