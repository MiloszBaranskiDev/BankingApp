import Chart from "elements/Currencies/Chart";

interface ICurrency {
  symbol: string;
  price?: number;
}

interface Props {
  currencies: ICurrency[];
}

const Charts: React.FC<Props> = ({ currencies }) => {
  return (
    <>
      {currencies.map((currency: ICurrency) => (
        <Chart symbol={currency.symbol} key={currency.symbol} />
      ))}
    </>
  );
};

export default Charts;
