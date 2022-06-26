import styled from "styled-components";
import CurrencyBalance from "elements/Wallet/CurrencyBalance";

interface ICurrency {
  symbol: string;
  amount: number;
}

interface Props {
  wallet: ICurrency[];
}

const S_CurrenciesBalance = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CurrenciesBalance: React.FC<Props> = ({ wallet }) => {
  return (
    <S_CurrenciesBalance>
      {wallet.map((currency) => (
        <CurrencyBalance
          symbol={currency.symbol}
          amount={currency.amount}
          key={currency.symbol}
        />
      ))}
    </S_CurrenciesBalance>
  );
};

export default CurrenciesBalance;
