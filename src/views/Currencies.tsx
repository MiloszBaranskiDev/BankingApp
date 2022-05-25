import { useState, useEffect } from "react";
import GetCurrencyPrice from "utils/GetCurrencyPrice";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import Loader from "elements/Loader";
import Tiles from "parts/Currencies/Tiles";

interface ICurrency {
  symbol: string;
  price?: Promise<Number> | number;
}

const Currencies: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([
    { symbol: "eur" },
    { symbol: "usd" },
    { symbol: "gbp" },
    { symbol: "chf" },
  ]);

  useEffect(() => {
    if (!currencies[0].price) {
      let currenciesObj: ICurrency[] = currencies;

      currencies.forEach(async (currency: ICurrency, i: number) => {
        currenciesObj[i]["price"] = await GetCurrencyPrice(currency.symbol);
        currencies.length - 1 === i && setLoading(!loading);
      });

      setCurrencies(currenciesObj);
    }
  }, [currencies]);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!loading ? <Tiles currencies={currencies} /> : <Loader />}
    </>
  );
};

export default Currencies;
