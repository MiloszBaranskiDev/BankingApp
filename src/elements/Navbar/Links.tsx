import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    display: flex;
    li {
      margin-right: 24px;
      display: flex;
      align-items: center;
      &:last-child {
        margin-right: 0;
      }
      i {
        margin-right: 4px;
      }
      a {
        font-size: ${(props) => props.theme.typography.size_normal};
        font-weight: ${(props) => props.theme.typography.weight_bold};
        transition: color 0.3s;
      }
      a:hover {
        color: ${(props) => props.theme.colors.main};
      }
    }
  }
`;

const Links: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">
            <i className="fas fa-home"></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/wallet">
            <i className="fas fa-wallet"></i>
            Wallet
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions">
            <i className="fas fa-hand-holding-usd"></i>
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/transfer">
            <i className="fas fa-paper-plane"></i>
            Transfer
          </NavLink>
        </li>
        <li>
          <NavLink to="/currencies">
            <i className="fas fa-coins"></i>
            Currencies
          </NavLink>
        </li>
        <li>
          <NavLink to="/card">
            <i className="fas fa-credit-card"></i>
            Card
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            <i className="fas fa-headset"></i>
            Help
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Links;
