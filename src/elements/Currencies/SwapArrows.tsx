import styled from "styled-components";

const StyledSwapArrows = styled.i`
  cursor: pointer;
  font-size: 36px;
  margin: 0 auto;
  padding: 0 16px;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

const SwapArrows: React.FC = () => {
  return <StyledSwapArrows className="fas fa-exchange-alt"></StyledSwapArrows>;
};

export default SwapArrows;
