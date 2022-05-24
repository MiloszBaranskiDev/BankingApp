import styled from "styled-components";

interface Props {
  symbol: string;
  price?: Promise<Number> | number;
}

const StyledTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49.3%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: 32.3%;
  }
`;

const StyledPrice = styled.p`
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  font-size: ${(props) => props.theme.typography.size_extra_big};
`;

const Tile: React.FC<Props> = ({ price, symbol }) => {
  return (
    <StyledTile>
      <StyledPrice>{20}</StyledPrice>
    </StyledTile>
  );
};

export default Tile;
