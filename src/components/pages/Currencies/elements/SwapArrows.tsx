import styled from "styled-components";

interface Props {
  reverseSwap: () => void;
}

const SwapArrows: React.FC<Props> = ({ reverseSwap }) => {
  return (
    <StyledSwapArrows onClick={reverseSwap}>
      <i className="fas fa-exchange-alt"></i>
    </StyledSwapArrows>
  );
};

export default SwapArrows;

const StyledSwapArrows = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 36px;
  text-align: center;
  padding: 20px 0;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.main};
  &:hover {
    color: unset;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 32px;
  }
`;