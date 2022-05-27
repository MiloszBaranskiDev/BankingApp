interface ICurrency {
  symbol: string;
  price?: number;
}

const GetCurrenciesPrices = async (currencies: ICurrency[]) => {
  try {
    const prices = await Promise.all(
      currencies.map(async (currency: ICurrency) => {
        const response: Response = await fetch(
          `http://api.nbp.pl/api/exchangerates/rates/a/${currency.symbol}`
        );

        const responseJson = await response.json();

        return responseJson;
      })
    );

    return currencies.map((currency, i) => {
      return {
        ...currency,
        price: prices[i].rates[0].mid,
      };
    });
  } catch (err) {
    console.error(err);
  }
};

export default GetCurrenciesPrices;
