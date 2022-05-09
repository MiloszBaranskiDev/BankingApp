import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav``;

const Links: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/wallet">Wallet</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/transfer">Transfer</NavLink>
        <NavLink to="/currencies">Currencies</NavLink>
        <NavLink to="/card">Card</NavLink>
        <NavLink to="/help">Help</NavLink>
      </ul>
    </StyledNav>
  );
};

export default Links;
