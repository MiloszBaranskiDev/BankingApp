import styled from "styled-components";

import { ICurrency } from "interfaces/ICurrency";

import CurrencyBalance from "../elements/CurrencyBalance";

interface Props {
  wallet: ICurrency[];
}

const CurrenciesBalance: React.FC<Props> = ({ wallet }) => {
  return (
    <StyledCurrenciesBalance>
      {wallet.map((currency) => (
        <CurrencyBalance
          symbol={currency.symbol}
          amount={currency.balance!}
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
