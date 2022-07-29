import styled from "styled-components";

import WalletTile from "../elements/WalletTile";

interface ITile {
  heading: string;
  number: number;
}

const tiles: ITile[] = [
  {
    heading: "Balance",
    number: 2400,
  },
  {
    heading: "Incomes",
    number: 2400,
  },
  {
    heading: "Outcomes",
    number: -2400,
  },
];

const WalletTiles: React.FC = () => {
  return (
    <StyledWalletTiles>
      {tiles.map((tile) => (
        <WalletTile heading={tile.heading} number={tile.number} />
      ))}
    </StyledWalletTiles>
  );
};

export default WalletTiles;

const StyledWalletTiles = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
