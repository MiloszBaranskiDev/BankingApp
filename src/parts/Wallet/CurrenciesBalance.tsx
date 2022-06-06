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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CurrenciesBalance: React.FC<Props> = ({ wallet }) => {
  return (
    <S_CurrenciesBalance>
      {wallet.map((currency) =>
        currency.symbol !== "PLN" ? (
          <CurrencyBalance
            symbol={currency.symbol}
            amount={currency.amount}
            key={currency.symbol}
          />
        ) : null
      )}
    </S_CurrenciesBalance>
  );
};

export default CurrenciesBalance;
