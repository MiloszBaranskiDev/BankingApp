import styled from "styled-components";
import StyledHeading from "elements/layout/StyledHeading";
import SwapArrows from "elements/Currencies/SwapArrows";

const StyledSwap = styled.div`
  margin: 40px 0;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
`;

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Swap: React.FC = () => {
  return (
    <StyledSwap>
      <StyledHeading>Swap</StyledHeading>
      <StyledBox>
        <SwapArrows />
      </StyledBox>
    </StyledSwap>
  );
};

export default Swap;
