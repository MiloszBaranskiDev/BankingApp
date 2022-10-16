import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { INavLink } from "interfaces/INavLink";

const Tile: React.FC<INavLink> = ({ to, text, icon }) => {
  return (
    <StyledTile to={to}>
      {icon}
      {text}
    </StyledTile>
  );
};

export default Tile;

const StyledTile = styled(NavLink)`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${(props) => props.theme.colors.bgc};
  font-size: ${(props) => props.theme.typography.size_extra_big};
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49.3%;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.bgc};
  }
  i {
    margin-bottom: 16px;
    font-size: 60px;
  }
`;
