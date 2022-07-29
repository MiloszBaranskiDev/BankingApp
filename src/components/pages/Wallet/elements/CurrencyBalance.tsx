import styled from "styled-components";

interface Props {
  symbol: string;
  amount: number;
}

const CurrencyBalance: React.FC<Props> = ({ symbol, amount }) => {
  return (
    <StyledCurrencyBalance>
      <p>
        <span>{amount}</span>
        <span>{symbol}</span>
      </p>
    </StyledCurrencyBalance>
  );
};

export default CurrencyBalance;

const StyledCurrencyBalance = styled.div`
  flex-basis: 48.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  padding: 10px;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  &:last-child {
    flex-grow: 1;
  }
  p {
    text-align: center;
    font-size: ${(props) => props.theme.typography.size_normal};
    font-weight: ${(props) => props.theme.typography.weight_bold};
    span {
      &:first-child {
        margin-right: 4px;
      }
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    &:last-child {
      margin-bottom: 0;
    }
    p {
      span {
        display: block;
        &:first-child {
          margin-right: 0;
        }
      }
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: 18.5%;
    padding: 0;
    margin-bottom: 0;
    &:last-child {
      flex-grow: unset;
    }
  }
`;
