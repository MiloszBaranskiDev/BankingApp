import styled from "styled-components";
import SwapArrows from "elements/Currencies/SwapArrows";
import SwapCurrency from "elements/Currencies/SwapCurrency";

const StyledSwap = styled.div`
  margin: 60px 0;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: unset;
    align-items: center;
  }
`;

const Swap: React.FC = () => {
  return (
    <StyledSwap>
      <StyledBox>
        <SwapCurrency outgoing={true} />
        <SwapArrows />
        <SwapCurrency outgoing={false} />
      </StyledBox>
    </StyledSwap>
  );
};

export default Swap;
