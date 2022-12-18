import styled from "styled-components";

interface IProps {
  canBeReversed: boolean;
  reverseSwap: () => void;
}

const SwapArrows: React.FC<IProps> = ({ canBeReversed, reverseSwap }) => {
  return (
    <StyledSwapArrows
      type="button"
      disabled={!canBeReversed}
      style={{ cursor: !canBeReversed ? "not-allowed" : "pointer" }}
      onClick={reverseSwap}
    >
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
  margin-bottom: 20px;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.main};
  &:hover {
    color: unset;
  }
`;
