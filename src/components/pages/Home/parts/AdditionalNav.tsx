import styled from "styled-components";

import { ERoute } from "enums/ERoute";
import { IRouteLink } from "interfaces/IRouteLink";

import NavTile from "../elements/NavTile";

const navTiles: IRouteLink[] = [
  {
    to: ERoute.wallet,
    text: ERoute.wallet,
    icon: <i className="fas fa-wallet"></i>,
  },
  {
    to: ERoute.currencies,
    text: ERoute.currencies,
    icon: <i className="fas fa-coins"></i>,
  },
  {
    to: ERoute.transfer,
    text: ERoute.transfer,
    icon: <i className="fas fa-paper-plane"></i>,
  },
  {
    to: ERoute.transactions,
    text: ERoute.transactions,
    icon: <i className="fas fa-hand-holding-usd"></i>,
  },
  {
    to: ERoute.help,
    text: ERoute.help,
    icon: <i className="fas fa-headset"></i>,
  },
  {
    to: ERoute.notifications,
    text: ERoute.notifications,
    icon: <i className="fas fa-bell"></i>,
  },
  {
    to: ERoute.profile,
    text: ERoute.profile,
    icon: <i className="fas fa-user"></i>,
  },
  {
    to: ERoute.settings,
    text: ERoute.settings,
    icon: <i className="fas fa-cog"></i>,
  },
];

const AdditionalNav: React.FC = () => {
  return (
    <>
      {navTiles.length > 0 && (
        <StyledAdditionalNav>
          {navTiles.map((navTile) => (
            <NavTile key={navTile.text} navTile={navTile} />
          ))}
        </StyledAdditionalNav>
      )}
    </>
  );
};

export default AdditionalNav;

const StyledAdditionalNav = styled.ul`
  display: grid;
  gap: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
