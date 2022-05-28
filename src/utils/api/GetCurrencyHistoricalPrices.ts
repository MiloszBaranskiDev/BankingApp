interface IJson {
  mid: number;
}

const GetCurrencyHistoricalPrices = async (
  symbol: string,
  start: string,
  end: string
) => {
  try {
    const prices: number[] = [];
    const response: Response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/a/${symbol}/${start}/${end}/`
    );

    const responseJson = await response.json();

    return responseJson;
  } catch (err) {
    console.error(err);
  }
};

export default GetCurrencyHistoricalPrices;
