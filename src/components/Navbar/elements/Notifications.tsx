import { useState, useEffect, useRef } from "react";
import { Location, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import S_Button from "components/layout/S_Button";
import HandleClickOutside from "helpers/HandleClickOutside";

const S_Container = styled.div`
  position: relative;
  margin-left: auto;
`;

const S_Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.typography};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  i {
    font-size: ${(props) => props.theme.typography.size_normal};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    &:hover {
      background-color: ${(props) => props.theme.colors.main};
      color: white;
    }
  }
`;

const S_Notifications = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 99;
  width: 200px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: 340px) {
    width: 225px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
    width: 80vw;
    max-width: 360px;
  }
  .top,
  .notification,
  .bottom {
    padding: 9px;
    border-bottom: 2px solid ${(props) => props.theme.colors.bgc_dark};
    @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
      padding: 14px;
    }
  }
  .top {
    display: flex;
    align-items: center;
    h3 {
      padding-right: 10px;
      margin-right: auto;
      font-size: ${(props) => props.theme.typography.size_normal};
      color: ${(props) => props.theme.colors.typography_dark};
    }
    p {
      padding: 3px 6px;
      color: white;
      background-color: ${(props) => props.theme.colors.main};
      border-radius: ${(props) => props.theme.radius};
      font-size: ${(props) => props.theme.typography.size_extra_small};
      font-weight: ${(props) => props.theme.typography.weight_bold};
    }
  }
  ul {
    .notification {
      display: flex;
      align-items: center;
      transition: background-color 0.3s;
      &__icon {
        flex-basis: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: white;
        background-color: ${(props) => props.theme.colors.main};
        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
          flex-basis: 38px;
          height: 38px;
        }
        i {
          font-size: ${(props) => props.theme.typography.size_small};
        }
      }
      &__content {
        padding: 0 9px;
        flex-basis: calc(100% - 38px - 60px);
        flex-grow: 1;
        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
          flex-grow: unset;
          padding: 0 18px;
        }
        p {
          font-size: ${(props) => props.theme.typography.size_extra_small};
        }
        p:first-child {
          font-weight: ${(props) => props.theme.typography.weight_bold};
          font-size: ${(props) => props.theme.typography.size_small};
        }
      }
      &__date {
        text-align: end;
        overflow-wrap: break-word;
        opacity: 0.8;
        font-size: ${(props) => props.theme.typography.size_extra_small};
        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
          flex-basis: 60px;
        }
      }
      &:hover {
        background-color: ${(props) => props.theme.colors.bgc_dark};
      }
    }
  }
`;

const Notifications: React.FC = () => {
  const submenuRef: any = useRef();
  const location: Location = useLocation();
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  useEffect(() => {
    HandleClickOutside(submenuRef, showNotifications, setShowNotifications);
  }, [showNotifications]);

  useEffect(() => {
    setShowNotifications(false);
  }, [location]);

  return (
    <S_Container ref={submenuRef}>
      <S_Icon
        onClick={() =>
          setShowNotifications((showNotifications) => !showNotifications)
        }
      >
        <i className="fas fa-bell"></i>
      </S_Icon>
      {showNotifications ? (
        <S_Notifications>
          <div className="top">
            <h3>Notifications</h3>
            <p>8 new</p>
          </div>
          <ul>
            <li>
              <NavLink to={`/notification/22`} className="notification">
                <div className="notification__icon">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="notification__content">
                  <p>Received Payment</p>
                  <p>Your account has been credited with 100$</p>
                </div>
                <p className="notification__date">Today</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/notification/44`} className="notification">
                <div className="notification__icon">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="notification__content">
                  <p>Received Payment</p>
                  <p>Your account has been credited with 100$</p>
                </div>
                <p className="notification__date">Today</p>
              </NavLink>
            </li>
          </ul>
          <div className="bottom">
            <S_Button as={NavLink} to="/notifications">
              Read all notifications
            </S_Button>
          </div>
        </S_Notifications>
      ) : null}
    </S_Container>
  );
};

export default Notifications;
