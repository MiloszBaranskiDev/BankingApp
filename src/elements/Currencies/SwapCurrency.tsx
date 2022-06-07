import styled from "styled-components";
import S_Heading from "elements/layout/S_Heading";
import S_Select from "elements/layout/S_Select";
import S_Input from "elements/layout/S_Input";

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

const S_SwapCurrency = styled.div`
  input,
  select {
    margin-bottom: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;

const SwapCurrency: React.FC<Props> = ({
  wallet,
  swapCurrency,
  setSwapCurrency,
  outgoing,
}) => {
  return (
    <S_SwapCurrency>
      <S_Heading>{outgoing ? "From" : "To"}</S_Heading>
      <S_Select
        value={swapCurrency}
        onChange={(e) => setSwapCurrency(e.target.value)}
      >
        {wallet.map((currency) => (
          <option
            value={currency.symbol}
            key={currency.symbol}
          >{`${currency.symbol} (balance: ${currency.amount} ${currency.symbol})`}</option>
        ))}
      </S_Select>
      <S_Input type="number" placeholder="Enter amount" />
      <p>Balance after: 500 {swapCurrency}</p>
    </S_SwapCurrency>
  );
};

export default SwapCurrency;
