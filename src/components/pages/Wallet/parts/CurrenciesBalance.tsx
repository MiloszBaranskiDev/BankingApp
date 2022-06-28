import styled from "styled-components";
import CurrencyBalance from "../elements/CurrencyBalance";

interface ICurrency {
  symbol: string;
  amount: number;
}

interface Props {
  wallet: ICurrency[];
}

const CurrenciesBalance: React.FC<Props> = ({ wallet }) => {
  return (
    <StyledCurrenciesBalance>
      {wallet.map((currency) => (
        <CurrencyBalance
          symbol={currency.symbol}
          amount={currency.amount}
          key={currency.symbol}
        />
      ))}
    </StyledCurrenciesBalance>
  );
};

export default CurrenciesBalance;

const StyledCurrenciesBalance = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
