import { useState, useEffect } from "react";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import GetCurrenciesPrices from "api/GetCurrenciesPrices";
import StyledPageTitle from "components/styled/StyledPageTitle";
import Loader from "components/Loader";
import Tiles from "./parts/Tiles";
import Swap from "./parts/Swap";
import Chart from "./parts/Chart";

interface ICurrency {
  symbol: string;
  price?: number;
  amount?: number;
}

interface ILoadPrices {
  (currencies: ICurrency[]): Promise<void>;
}

const excludePLN = (currencies: ICurrency[]) => {
  return currencies.filter((currency) => currency.symbol !== "PLN");
};

const Currencies: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>(
    wallet.map((currency) => currency)
  );

  const loadPrices: ILoadPrices = async (currencies) => {
    const loadedData = await GetCurrenciesPrices(excludePLN(currencies));
    setCurrencies(loadedData!);
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

  // console.log(currencies);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      {!loading ? (
        <>
          <Tiles currencies={excludePLN(currencies)} />
          {currencies.filter((currency) => currency.amount! >= 0.01).length >=
            2 && <Swap currencies={currencies} />}
          {excludePLN(currencies).map((currency) => (
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
