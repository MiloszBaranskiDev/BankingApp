import { useState, useEffect, useRef } from "react";
import { Location, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import HandleClickOutside from "helpers/HandleClickOutside";

import { ERoute } from "enums/ERoute";
import { INotification } from "interfaces/INotification";

import StyledButton from "components/styled/StyledButton";

const Notifications: React.FC = () => {
  const notifications: INotification[] = useSelector(
    (state: RootState) => state.notifications
  );
  const submenuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const location: Location = useLocation();
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  useEffect(() => {
    HandleClickOutside(submenuRef, showNotifications, setShowNotifications);
  }, [showNotifications]);

  useEffect(() => {
    setShowNotifications(false);
  }, [location]);

  const newNotificationsCount: number = notifications.filter(
    (notification) => notification.read === false
  ).length;

  return (
    <StyledContainer ref={submenuRef}>
      <StyledIcon
        className={newNotificationsCount > 0 ? "hasUnread" : ""}
        onClick={() =>
          setShowNotifications((showNotifications) => !showNotifications)
        }
      >
        <i className="fas fa-bell"></i>
      </StyledIcon>
      {showNotifications ? (
        <StyledNotifications>
          <div className="notifications">
            <div className="notifications__top">
              <h3>Notifications</h3>
              <>
                {newNotificationsCount > 0 && (
                  <p>{newNotificationsCount} new</p>
                )}
              </>
            </div>
            <>
              {notifications.length > 0 ? (
                <ul className="notifications__items">
                  {notifications
                    .slice(0)
                    .reverse()
                    .slice(0, 3)
                    .map((notification) => (
                      <li key={notification.id}>
                        <Link
                          to={`${ERoute.notification}${notification.id}`}
                          className="notification"
                        >
                          <div
                            className={`notification__icon ${
                              !notification.read ? "new" : ""
                            }`}
                          >
                            <i className="fas fa-bell"></i>
                          </div>
                          <div className="notification__content">
                            <p>{notification.title}</p>
                            <p>
                              {notification.content
                                .split(" ")
                                .slice(0, 8)
                                .join(" ")}
                              ...
                            </p>
                          </div>
                          <p className="notification__date">
                            {notification.date}
                          </p>
                        </Link>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="notifications__info">
                  You don't have any notifications.
                </p>
              )}
            </>
            {notifications.length > 0 && (
              <div className="notifications__bottom">
                <StyledButton as={Link} to={ERoute.notifications}>
                  Read all notifications
                </StyledButton>
              </div>
            )}
          </div>
        </StyledNotifications>
      ) : null}
    </StyledContainer>
  );
};

export default Notifications;

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

const StyledIcon = styled.button`
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
  &.hasUnread {
    color: ${(props) => props.theme.colors.main};
  }
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

const StyledNotifications = styled.div`
  .notifications {
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
    &__top,
    .notification,
    &__bottom {
      padding: 9px;
      border-bottom: 2px solid ${(props) => props.theme.colors.bgc_dark};
      @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
        padding: 14px;
      }
    }
    &__top {
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
    &__items {
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
          color: ${(props) => props.theme.colors.main};
          background-color: ${(props) => props.theme.colors.bgc_dark};
          &.new {
            color: white;
            background-color: ${(props) => props.theme.colors.main};
          }
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
    &__bottom {
      a {
        display: block;
      }
    }
    &__info {
      padding: 14px;
    }
  }
`;
