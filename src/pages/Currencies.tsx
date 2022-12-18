import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { IWallet } from "interfaces/IWallet";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

import StyledPageTitle from "components/styled/StyledPageTitle";
import StyledHeading from "components/styled/StyledHeading";
import Tiles from "components/pages/Currencies/parts/Tiles";
import Swap from "components/pages/Currencies/parts/Swap";
import Chart from "components/pages/Currencies/parts/Chart";

interface IProps {
  currenciesRates: ICurrencyRate[];
}

const Currencies: React.FC<IProps> = ({ currenciesRates }) => {
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  return (
    <>
      <StyledPageTitle>Currencies</StyledPageTitle>
      <>
        <Tiles
          currencies={wallet.currencies.filter(
            (currency) => currency.symbol !== ECurrencySymbol.pln
          )}
          currenciesRates={currenciesRates}
        />
        <>
          <StyledHeading>Swap currencies</StyledHeading>
          <Swap
            currencies={wallet.currencies}
            currenciesRates={currenciesRates}
          />
        </>
        {wallet.currencies
          .filter((currency) => currency.symbol !== ECurrencySymbol.pln)
          .map((currency) => (
            <Chart
              currencySymbol={
                currency.symbol as Exclude<ECurrencySymbol, ECurrencySymbol.pln>
              }
              key={currency.symbol}
            />
          ))}
      </>
    </>
  );
};

export default Currencies;
