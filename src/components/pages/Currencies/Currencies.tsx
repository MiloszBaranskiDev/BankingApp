import { useState, useEffect } from "react";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import GetCurrenciesPrices from "api/GetCurrenciesPrices";
import StyledPageTitle from "components/layout/StyledPageTitle";
import Loader from "components/Loader";
import Tiles from "./parts/Tiles";
import Swap from "./parts/Swap";
import Chart from "./parts/Chart";

interface ICurrency {
  symbol: string;
  price?: number;
}

interface ILoadPrices {
  (currencies: ICurrency[]): Promise<void>;
}

const Currencies: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>(
    wallet
      .filter((currency) => currency["symbol"] !== "PLN")
      .map((currency) => currency)
  );

  const loadPrices: ILoadPrices = async (currencies) => {
    const loadedData = await GetCurrenciesPrices(currencies);
    setCurrencies(loadedData!);
  };

  useEffect(() => {
    loadPrices(currencies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    currencies[currencies.length - 1].price !== undefined
      ? setLoading(false)
      : setLoading(true);
  }, [currencies]);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!loading ? (
        <>
          <Tiles currencies={currencies} />
          <Swap wallet={wallet} />
          {currencies.map((currency: ICurrency) => (
            <Chart symbol={currency.symbol} key={currency.symbol} />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Currencies;
