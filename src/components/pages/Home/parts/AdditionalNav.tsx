import styled from "styled-components";

import { INavLink } from "interfaces/INavLink";

import NavTile from "../elements/NavTile";

const navTiles: INavLink[] = [
  {
    to: "/wallet",
    text: "Wallet",
    icon: <i className="fas fa-wallet"></i>,
  },
  {
    to: "/currencies",
    text: "Currencies",
    icon: <i className="fas fa-coins"></i>,
  },
  {
    to: "/transfer",
    text: "Transfer",
    icon: <i className="fas fa-paper-plane"></i>,
  },
  {
    to: "/transactions",
    text: "Transactions",
    icon: <i className="fas fa-hand-holding-usd"></i>,
  },
  {
    to: "/help",
    text: "Help",
    icon: <i className="fas fa-headset"></i>,
  },
  {
    to: "/notifications",
    text: "Notifications",
    icon: <i className="fas fa-bell"></i>,
  },
  {
    to: "/profile",
    text: "Profile",
    icon: <i className="fas fa-user"></i>,
  },
  {
    to: "/settings",
    text: "Settings",
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
