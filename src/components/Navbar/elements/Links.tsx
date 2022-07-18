import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  openLinks: boolean;
}

interface ILink {
  to: string;
  text: string;
  icon: ReactElement;
}

const links: ILink[] = [
  {
    to: "/",
    text: "Home",
    icon: <i className="fas fa-home"></i>,
  },
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
];

const Links: React.FC<Props> = ({ openLinks }) => {
  return (
    <StyledLinks className={`${openLinks ? "open-links" : ""}`}>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={link.to}
            >
              {link.icon}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledLinks>
  );
};

export default Links;

const StyledLinks = styled.nav`
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
        margin-right: 7px;
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
    transform: translateX(-100vw);
    overflow: hidden;
    top: 60px;
    left: 0;
    height: 0;
    opacity: 0;
    z-index: -5;
    transition: all 0.3s;
    background-color: ${(props) => props.theme.colors.bgc};
    &.open-links {
      transform: unset;
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
