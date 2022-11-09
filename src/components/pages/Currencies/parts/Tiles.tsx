import styled from "styled-components";

import { ICurrency } from "interfaces/ICurrency";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

import StyledHeading from "components/styled/StyledHeading";
import Tile from "../elements/Tile";

interface IProps {
  currenciesRates: ICurrencyRate[];
  currencies: ICurrency[];
}

const Tiles: React.FC<IProps> = ({ currenciesRates, currencies }) => {
  return (
    <StyledTiles>
      <StyledHeading>Exchange rates</StyledHeading>
      {currencies.map((currency: ICurrency) => (
        <Tile
          price={
            currenciesRates.find((item) => item.symbol === currency.symbol)!
              .price
          }
          symbol={currency.symbol}
          key={currency.symbol}
        />
      ))}
    </StyledTiles>
  );
};

export default Tiles;

const StyledTiles = styled.div`
  margin-bottom: 60px;
  h2 {
    flex-basis: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
