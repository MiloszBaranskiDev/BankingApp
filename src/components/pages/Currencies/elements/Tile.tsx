import styled from "styled-components";

interface IProps {
  symbol: string;
  price?: number;
}

const Tile: React.FC<IProps> = ({ price, symbol }) => {
  return (
    <StyledTile>
      <StyledText>{symbol}/PLN</StyledText>
      <StyledText>{price}</StyledText>
    </StyledTile>
  );
};

export default Tile;

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: 23.8%;
    margin-bottom: 0;
  }
`;

const StyledText = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  font-size: ${(props) => props.theme.typography.size_extra_big};
  &:first-child {
    margin-bottom: 2px;
  }
`;
