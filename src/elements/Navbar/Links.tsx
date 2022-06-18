import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  openLinks: boolean;
}

const S_Links = styled.nav`
  flex-basis: 100%;
  width: 100%;
  order: 1;
  ul {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 36px;
      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        justify-content: flex-end;
      }
      &:last-child {
        margin-right: 0;
      }
      i {
        margin-right: 6px;
      }
      a {
        font-size: ${(props) => props.theme.typography.size_big};
        font-weight: ${(props) => props.theme.typography.weight_bold};
        transition: color 0.3s;
      }
      .active-link,
      a:hover {
        color: ${(props) => props.theme.colors.main};
      }
    }
  }
  @media (max-width: calc(${(props) =>
      props.theme.breakpoints.desktop} - 1px)) {
    position: absolute;
    top: 60px;
    left: 0;
    height: 0;
    opacity: 0;
    z-index: -5;
    transition: all 0.3s;
    background-color: ${(props) => props.theme.colors.bgc};
    &.open-links {
      height: 275px;
      opacity: 1;
      z-index: 5;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-right: calc((100% - 720px) / 2);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-left: auto;
    flex-basis: unset;
    padding-right: unset;
    width: unset;
    order: unset;
    ul {
      padding-top: 0;
      flex-direction: row;
      li {
        margin-right: 45px;
        justify-content: unset;
        line-height: unset;
        a {
          font-size: ${(props) => props.theme.typography.size_normal};
        }
      }
    }
  }
`;

const Links: React.FC<Props> = ({ openLinks }) => {
  return (
    <S_Links className={`${openLinks ? "open-links" : ""}`}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-home"></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wallet"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-wallet"></i>
            Wallet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-hand-holding-usd"></i>
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transfer"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-paper-plane"></i>
            Transfer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/currencies"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-coins"></i>
            Currencies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-credit-card"></i>
            Card
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-headset"></i>
            Help
          </NavLink>
        </li>
      </ul>
    </S_Links>
  );
};

export default Links;
