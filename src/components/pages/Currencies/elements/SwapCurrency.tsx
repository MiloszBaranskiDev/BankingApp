import styled from "styled-components";
import StyledHeading from "components/styled/StyledHeading";
import StyledSelect from "components/styled/StyledSelect";
import StyledInput from "components/styled/StyledInput";

interface ICurrency {
  symbol: string;
  amount?: number;
}

interface Props {
  wallet: ICurrency[];
  exchangedCurrency: string;
  oppositeCurrency: string;
  setSwapCurrency: (arg0: string) => void;
  outgoing: boolean;
}

const SwapCurrency: React.FC<Props> = ({
  wallet,
  exchangedCurrency,
  oppositeCurrency,
  setSwapCurrency,
  outgoing,
}) => {
  return (
    <StyledSwapCurrency>
      <StyledHeading>{outgoing ? "From" : "To"}</StyledHeading>
      <StyledSelect
        value={exchangedCurrency}
        onChange={(e) => setSwapCurrency(e.target.value)}
      >
        {wallet
          .filter((currency) => currency.symbol !== oppositeCurrency)
          .map((currency) => (
            <option
              value={currency.symbol}
              key={currency.symbol}
            >{`${currency.symbol} (balance: ${currency.amount} ${currency.symbol})`}</option>
          ))}
      </StyledSelect>
      <StyledInput type="number" placeholder="Enter amount" />
      <p>Balance after: 500 {exchangedCurrency}</p>
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
