import styled from "styled-components";

interface Props {
  symbol: string;
  amount: number;
}

const S_CurrencyBalance = styled.div`
  flex-basis: 48.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    &:nth-last-of-type(-n + 2) {
      margin-bottom: 0;
    }
  }
  p {
    font-size: ${(props) => props.theme.typography.size_big};
    font-weight: ${(props) => props.theme.typography.weight_bold};
  }
`;

const CurrencyBalance: React.FC<Props> = ({ symbol, amount }) => {
  return (
    <S_CurrencyBalance>
      <p>
        {amount} {symbol}
      </p>
    </S_CurrencyBalance>
  );
};

export default CurrencyBalance;
