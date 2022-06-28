import styled from "styled-components";
import StyledHeading from "components/layout/StyledHeading";
import StyledSelect from "components/layout/StyledSelect";
import StyledInput from "components/layout/StyledInput";

interface ICurrency {
  symbol: string;
  amount?: number;
}

interface Props {
  wallet: ICurrency[];
  swapCurrency: string;
  setSwapCurrency: (arg0: string) => void;
  outgoing: boolean;
}

const SwapCurrency: React.FC<Props> = ({
  wallet,
  swapCurrency,
  setSwapCurrency,
  outgoing,
}) => {
  return (
    <StyledSwapCurrency>
      <StyledHeading>{outgoing ? "From" : "To"}</StyledHeading>
      <StyledSelect
        value={swapCurrency}
        onChange={(e) => setSwapCurrency(e.target.value)}
      >
        {wallet.map((currency) => (
          <option
            value={currency.symbol}
            key={currency.symbol}
          >{`${currency.symbol} (balance: ${currency.amount} ${currency.symbol})`}</option>
        ))}
      </StyledSelect>
      <StyledInput type="number" placeholder="Enter amount" />
      <p>Balance after: 500 {swapCurrency}</p>
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
