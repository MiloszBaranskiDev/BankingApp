import styled from "styled-components";
import StyledHeading from "components/styled/StyledHeading";
import Tile from "../elements/Tile";

interface ICurrency {
  symbol: string;
  price?: number;
}

interface Props {
  currencies: ICurrency[];
}

const Tiles: React.FC<Props> = ({ currencies }) => {
  return (
    <StyledTiles>
      <StyledHeading>Exchange rates</StyledHeading>
      {currencies.map((currency: ICurrency) => (
        <Tile
          price={currency.price}
          symbol={currency.symbol}
          key={currency.symbol}
        />
      ))}
    </StyledTiles>
  );
};

export default Tiles;

const StyledTiles = styled.div`
  h2 {
    flex-basis: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
