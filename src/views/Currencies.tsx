import { useState, useEffect } from "react";
import GetCurrenciesPrices from "utils/GetCurrenciesPrices";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import Loader from "elements/Loader";
import Tiles from "parts/Currencies/Tiles";
import Swap from "parts/Currencies/Swap";

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
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!loading ? (
        <>
          <Tiles currencies={currencies} />
          <Swap />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Currencies;
