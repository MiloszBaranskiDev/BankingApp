import styled from "styled-components";
import S_Heading from "elements/layout/S_Heading";
import S_Select from "elements/layout/S_Select";
import S_Input from "elements/layout/S_Input";

interface Props {
  outgoing: boolean;
}

const S_SwapCurrency = styled.div`
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
    <S_SwapCurrency>
      <S_Heading>{outgoing ? "From" : "To"}</S_Heading>
      <S_Select>
        <option value="PLN">{"PLN (balance: 200zł)"}</option>
        <option value="EUR">{"EUR (balance: 35€)"}</option>
        <option value="USD">{"USD (balance: 40$)"}</option>
      </S_Select>
      <S_Input type="number" placeholder="Enter amount" />
      <p>Balance after: 500</p>
    </S_SwapCurrency>
  );
};

export default SwapCurrency;
