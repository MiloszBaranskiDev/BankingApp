import { useState, useEffect } from "react";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import GetCurrencyPrice from "utils/GetCurrencyPrice";

interface ICurrency {
  symbol: string;
  price?: Promise<Number> | number;
}

const Currencies: React.FC = () => {
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
        const currenciesObj: ICurrency[] = Object.assign({}, currencies);
        currenciesObj[i]["price"] = GetCurrencyPrice(currency.symbol);
        setCurrencies(currenciesObj);
      });
    }
  }, []);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
    </>
  );
};

export default Currencies;
