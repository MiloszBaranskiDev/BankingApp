import { useState, useEffect } from "react";
import GetCurrenciesPrices from "api/GetCurrenciesPrices";
import S_PageTitle from "elements/layout/S_PageTitle";
import Loader from "elements/Loader";
import Tiles from "parts/Currencies/Tiles";
import Swap from "parts/Currencies/Swap";
import Chart from "parts/Currencies/Chart";

interface ICurrency {
  symbol: string;
  price?: number;
}

interface ILoadPrices {
  (currencies: ICurrency[]): Promise<void>;
}

const Currencies: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([
    { symbol: "eur" },
    { symbol: "usd" },
    { symbol: "gbp" },
    { symbol: "chf" },
  ]);

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
      <S_PageTitle>Currencies</S_PageTitle>
      {!loading ? (
        <>
          <Tiles currencies={currencies} />
          <Swap />
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
