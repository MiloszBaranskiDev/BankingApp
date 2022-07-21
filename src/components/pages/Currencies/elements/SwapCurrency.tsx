import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

import { ICurrency } from "interfaces/ICurrency";

import StyledHeading from "components/styled/StyledHeading";
import StyledSelect from "components/styled/StyledSelect";
import StyledInput from "components/styled/StyledInput";

interface ISwapData {
  symbol: string;
  amount: number;
}

interface Props {
  currencies: ICurrency[];
  oppositeCurrency: string;
  swapData: ISwapData;
  setSwapData: Dispatch<SetStateAction<ISwapData>>;
  outgoing: boolean;
}

const SwapCurrency: React.FC<Props> = ({
  currencies,
  oppositeCurrency,
  swapData,
  setSwapData,
  outgoing,
}) => {
  return (
    <StyledSwapCurrency>
      <StyledHeading>{outgoing ? "From" : "To"}</StyledHeading>
      <StyledSelect
        value={swapData.symbol}
        onChange={(e) => setSwapData({ ...swapData, symbol: e.target.value })}
      >
        {currencies
          .filter(
            (currency) =>
              currency.symbol !== oppositeCurrency && currency.balance! >= 0.01
          )
          .map((currency) => (
            <option
              value={currency.symbol}
              key={currency.symbol}
            >{`${currency.symbol} (balance: ${currency.balance} ${currency.symbol})`}</option>
          ))}
      </StyledSelect>
      <StyledInput
        type="number"
        placeholder="Enter amount"
        // min={}
        // max={}
        value={swapData.amount.toFixed(2)}
        onChange={(e) =>
          setSwapData({ ...swapData, amount: Number(e.target.value) })
        }
      />
      <p>Balance after: 500 {swapData.symbol}</p>
    </StyledSwapCurrency>
  );
};

export default SwapCurrency;

const StyledSwapCurrency = styled.div`
  input,
  select {
    margin-bottom: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;
