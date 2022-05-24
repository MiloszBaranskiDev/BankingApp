const GetCurrencyPrice = async (symbol: string) => {
  try {
    const currency: Response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/a/${symbol}`
    );
    const currencyJson: any = await currency.json();
    return currencyJson.rates[0].mid;
  } catch (err) {
    console.error(err);
  }
};

export default GetCurrencyPrice;
