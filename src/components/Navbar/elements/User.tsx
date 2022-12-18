import { useState, useEffect, useRef } from "react";
import { Location, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import HandleClickOutside from "helpers/HandleClickOutside";

import { IUser } from "interfaces/IUser";
import { EUserKey } from "enums/EUserKey";
import { ERoute } from "enums/ERoute";

const User: React.FC = () => {
  const submenuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const location: Location = useLocation();

  const user: IUser = useSelector((state: RootState) => state.user);

  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  useEffect(() => {
    HandleClickOutside(submenuRef, showUserMenu, setShowUserMenu);
  }, [showUserMenu]);

  useEffect(() => {
    setShowUserMenu(false);
  }, [location]);

  return (
    <StyledContainer ref={submenuRef}>
      <StyledIcon
        onClick={() => setShowUserMenu((showUserMenu) => !showUserMenu)}
        style={{
          backgroundImage: `url(${user[EUserKey.image]})`,
        }}
      />
      {showUserMenu && (
        <StyledUserMenu>
          <div className="top">
            <h3>{user[EUserKey.name]}</h3>
            <p>Bank account</p>
          </div>
          <ul>
            <li>
              <Link to={ERoute.profile}>
                <i className="fas fa-user"></i>
                Profile
              </Link>
            </li>
            <li>
              <Link to={ERoute.notifications}>
                <i className="fas fa-bell"></i>
                Notifications
              </Link>
            </li>
            <li>
              <Link to={ERoute.settings}>
                <i className="fas fa-cog"></i>
                Settings
              </Link>
            </li>
          </ul>
        </StyledUserMenu>
      )}
    </StyledContainer>
  );
};

export default User;

const StyledContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const StyledIcon = styled.button`
  margin-left: 8px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.85);
  }
`;

const StyledUserMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 99;
  width: 240px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  .top {
    padding: 14px;
    word-wrap: break-word;
    border-bottom: 2px solid ${(props) => props.theme.colors.bgc_dark};
    p {
      font-size: ${(props) => props.theme.typography.size_small};
    }
  }
  ul {
    li {
      a {
        display: block;
        padding: 7px 14px;
        transition: color 0.3s;
        &:hover {
          color: ${(props) => props.theme.colors.main};
        }
        i {
          margin-right: 6px;
        }
      }
      &:first-child {
        a {
          padding-top: 14px;
        }
      }
      &:last-child {
        a {
          padding-bottom: 14px;
        }
      }
    }
  }
`;
