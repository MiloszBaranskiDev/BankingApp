import styled from "styled-components";
import Tile from "elements/Currencies/Tile";

interface ICurrency {
  symbol: string;
  price?: Promise<Number> | number;
}

interface Props {
  currencies: ICurrency[];
}

const StyledTiles = styled.div`
  margin-top: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Tiles: React.FC<Props> = ({ currencies }) => {
  return (
    <StyledTiles>
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
