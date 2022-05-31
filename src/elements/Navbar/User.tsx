import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  const ref: any = useRef();
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (showUserMenu && ref.current && !ref.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <StyledContainer ref={ref}>
      <StyledIcon
        onClick={() => setShowUserMenu((showUserMenu) => !showUserMenu)}
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg')",
        }}
      />
      {showUserMenu ? (
        <StyledUserMenu>
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
        </StyledUserMenu>
      ) : null}
    </StyledContainer>
  );
};

export default User;
