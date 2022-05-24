import { useState, useEffect } from "react";
import GetCurrencyPrice from "utils/GetCurrencyPrice";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import Tiles from "parts/Currencies/Tiles";
import Loader from "elements/Loader";

interface ICurrency {
  symbol: string;
  price?: Promise<Number> | number;
}

const Currencies: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([
    {
      symbol: "eur",
    },
    {
      symbol: "usd",
    },
    {
      symbol: "gbp",
    },
  ]);

  useEffect(() => {
    if (currencies.length > 0) {
      currencies.forEach((currency: ICurrency, i: number) => {
        const currenciesObj: ICurrency[] = currencies;
        currenciesObj[i]["price"] = GetCurrencyPrice(currency.symbol);
        setCurrencies(currenciesObj);
      });
      currencies[0].price ? setLoading(false) : setLoading(loading);
    }
  }, []);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!loading ? <Tiles currencies={currencies} /> : <Loader />}
    </>
  );
};

export default Currencies;
