import { ECurrencySymbol } from "enums/ECurrencySymbol";

const GetCurrencyHistoricalPrices = async (
  currencySymbol: Exclude<ECurrencySymbol, ECurrencySymbol.pln>,
  start: string,
  end: string
) => {
  try {
    const historicalPrices: number[] = [];
    const response: Response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/a/${currencySymbol}/${start}/${end}/`
    );

    const responseJson = await response.json();

    await responseJson.rates.forEach((obj: { mid: number }) => {
      historicalPrices.push(obj.mid);
    });

    return historicalPrices;
  } catch (err) {
    console.error(err);
  }
};

export default GetCurrencyHistoricalPrices;
