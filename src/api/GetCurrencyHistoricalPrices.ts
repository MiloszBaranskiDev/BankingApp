const GetCurrencyHistoricalPrices = async (
  symbol: string,
  start: string,
  end: string
) => {
  try {
    const historicalPrices: number[] = [];
    const response: Response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/a/${symbol}/${start}/${end}/`
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
