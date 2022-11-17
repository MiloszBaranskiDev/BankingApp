import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ICurrency } from "interfaces/ICurrency";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

const GetConvertedCurrencies = (
  currencies: ICurrency[],
  currenciesRates: ICurrencyRate[]
): number => {
  const mainCurrency: ICurrency = currencies.find(
    (currency) => currency.symbol === ECurrencySymbol.pln
  )!;

  let result: number = mainCurrency.balance!;

  currencies.forEach((currency) => {
    currency.symbol !== mainCurrency.symbol &&
      (result +=
        currency.balance! *
        currenciesRates!.find((item) => item.symbol === currency.symbol)!
          .price);
  });

  return Number(result.toFixed(2));
};

export default GetConvertedCurrencies;
