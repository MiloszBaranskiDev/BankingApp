import styled from "styled-components";

const StyledSwapArrows = styled.i`
  cursor: pointer;
  font-size: 36px;
  text-align: center;
  padding: 20px 0;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 32px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 64px;
  }
`;

const SwapArrows: React.FC = () => {
  return <StyledSwapArrows className="fas fa-exchange-alt"></StyledSwapArrows>;
};

export default SwapArrows;
