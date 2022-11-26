import styled from "styled-components";

import { ERoute } from "enums/ERoute";
import { IRouteLink } from "interfaces/IRouteLink";

import Tile from "../elements/Tile";

const tiles: IRouteLink[] = [
  {
    to: ERoute.faq,
    text: "See answers to the most popular questions.",
    icon: <i className="fas fa-question-circle"></i>,
  },
  {
    to: ERoute.chat,
    text: "Describe your problem in chat.",
    icon: <i className="fas fa-comment-dots"></i>,
  },
];

const Tiles: React.FC = () => {
  return (
    <>
      {tiles.length > 0 && (
        <StyledTiles>
          {tiles.map((tile) => (
            <Tile
              key={tile.to}
              to={tile.to}
              text={tile.text}
              icon={tile.icon}
            />
          ))}
        </StyledTiles>
      )}
    </>
  );
};

export default Tiles;

const StyledTiles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;
