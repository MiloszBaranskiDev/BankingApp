import styled from "styled-components";
import StyledHeading from "elements/layout/StyledHeading";
import BalanceAmount from "elements/Wallet/BalanceAmount";
import BalanceInfo from "elements/Wallet/BalanceInfo";

const StyledBalance = styled.div`
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 30%;
    margin-right: auto;
  }
  h2 {
    span {
      font-weight: ${(props) => props.theme.typography.weight_normal};
    }
  }
`;

const Balance: React.FC = () => {
  return (
    <StyledBalance>
      <StyledHeading>
        Total balance<span>*</span>
      </StyledHeading>
      <BalanceAmount />
      <BalanceInfo />
    </StyledBalance>
  );
};

export default Balance;
