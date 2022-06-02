import styled from "styled-components";
import CurrencyBalance from "elements/Wallet/CurrencyBalance";

const S_CurrenciesBalance = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CurrenciesBalance: React.FC = () => {
  const example = [
    {
      symbol: "eur",
      amount: 23.3,
    },
    {
      symbol: "usd",
      amount: 30.12,
    },
    {
      symbol: "gbp",
      amount: 15.56,
    },
    {
      symbol: "chf",
      amount: 12.11,
    },
  ];

  return (
    <S_CurrenciesBalance>
      {example.map((currency) => (
        <CurrencyBalance
          symbol={currency.symbol.toUpperCase()}
          amount={currency.amount}
          key={currency.symbol}
        />
      ))}
    </S_CurrenciesBalance>
  );
};

export default CurrenciesBalance;
