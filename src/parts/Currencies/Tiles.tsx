import styled from "styled-components";
import S_Heading from "elements/layout/S_Heading";
import Tile from "elements/Currencies/Tile";

interface ICurrency {
  symbol: string;
  price?: number;
}

interface Props {
  currencies: ICurrency[];
}

const S_Tiles = styled.div`
  h2 {
    flex-basis: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Tiles: React.FC<Props> = ({ currencies }) => {
  return (
    <S_Tiles>
      <S_Heading>Exchange rates</S_Heading>
      {currencies.map((currency: ICurrency) => (
        <Tile
          price={currency.price}
          symbol={currency.symbol}
          key={currency.symbol}
        />
      ))}
    </S_Tiles>
  );
};

export default Tiles;
