import styled from "styled-components";
import StyledHeading from "elements/layout/StyledHeading";
import StyledSelect from "elements/layout/StyledSelect";
import StyledInput from "elements/layout/StyledInput";

interface Props {
  outgoing: boolean;
}

const StyledSwapCurrency = styled.div`
  input,
  select {
    margin-bottom: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;

const SwapCurrency: React.FC<Props> = ({ outgoing }) => {
  return (
    <StyledSwapCurrency>
      <StyledHeading>{outgoing ? "From" : "To"}</StyledHeading>
      <StyledSelect>
        <option value="PLN">{"PLN (balance: 200zł)"}</option>
        <option value="EUR">{"EUR (balance: 35€)"}</option>
        <option value="USD">{"USD (balance: 40$)"}</option>
      </StyledSelect>
      <StyledInput type="number" placeholder="Enter amount" />
      <p>Balance after: 500</p>
    </StyledSwapCurrency>
  );
};

export default SwapCurrency;
