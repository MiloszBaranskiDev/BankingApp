import styled from "styled-components";

import { ICurrency } from "interfaces/ICurrency";

import CurrencyBalance from "../elements/CurrencyBalance";

interface IProps {
  currencies: ICurrency[];
}

const CurrenciesBalance: React.FC<IProps> = ({ currencies }) => {
  return (
    <StyledCurrenciesBalance>
      {currencies.map((currency) => (
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
