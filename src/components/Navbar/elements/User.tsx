import { useState, useEffect, useRef } from "react";
import { Location, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HandleClickOutside from "utils/HandleClickOutside";

interface IUserField {
  label: string;
  type: string;
  value: string;
}

const S_Container = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const S_Icon = styled.button`
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

const S_UserMenu = styled.div`
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

const User: React.FC = () => {
  const submenuRef: any = useRef();
  const location: Location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const userFields: IUserField[] = useSelector(
    (state: RootState) => state.user
  );
  const imagePath: string = userFields.find(
    (item) => item.label === "image"
  )!.value;

  useEffect(() => {
    HandleClickOutside(submenuRef, showUserMenu, setShowUserMenu);
  }, [showUserMenu]);

  useEffect(() => {
    setShowUserMenu(false);
  }, [location]);

  return (
    <S_Container ref={submenuRef}>
      <S_Icon
        onClick={() => setShowUserMenu((showUserMenu) => !showUserMenu)}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      />
      {showUserMenu ? (
        <S_UserMenu>
          <div className="top">
            <h3>Name</h3>
            <p>Bank account</p>
          </div>
          <ul>
            <li>
              <NavLink to="/profile">
                <i className="fas fa-user"></i>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/notifications">
                <i className="fas fa-bell"></i>
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">
                <i className="fas fa-cog"></i>
                Settings
              </NavLink>
            </li>
          </ul>
        </S_UserMenu>
      ) : null}
    </S_Container>
  );
};

export default User;
