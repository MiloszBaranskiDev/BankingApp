import styled from "styled-components";
import { Link } from "react-router-dom";

import { INavLink } from "interfaces/INavLink";

interface IProps {
  navTile: INavLink;
}

const NavTile: React.FC<IProps> = ({ navTile }) => {
  return (
    <StyledNavTile>
      <Link to={navTile.to}>
        {navTile.icon}
        {navTile.text}
      </Link>
    </StyledNavTile>
  );
};

export default NavTile;

const StyledNavTile = styled.li`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    font-size: ${(props) => props.theme.typography.size_big};
    font-weight: ${(props) => props.theme.typography.weight_bold};
    background-color: ${(props) => props.theme.colors.bgc};
    padding: ${(props) => props.theme.tilePadding};
    border-radius: ${(props) => props.theme.radius};
    box-shadow: ${(props) => props.theme.shadow};
    i {
      margin-bottom: 10px;
    }
    * {
      transition: color 0.3s;
      text-align: center;
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.main};
      color: white;
    }
  }
`;
