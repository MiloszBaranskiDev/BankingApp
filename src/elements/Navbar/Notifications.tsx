import { useState } from "react";
import styled from "styled-components";

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
  i {
    font-size: ${(props) => props.theme.typography.size_normal};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: white;
  }
`;

const StyledNotifications = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 99;
  width: 85vw;
  max-width: 360px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  .top,
  .notification,
  .bottom {
    padding: 14px;
    border-bottom: 1px solid ${(props) => props.theme.colors.bgc_dark};
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
      background-color: ${(props) => props.theme.colors.main};
      color: white;
      border-radius: ${(props) => props.theme.radius};
      padding: 3px 6px;
      font-size: ${(props) => props.theme.typography.size_extra_small};
      font-weight: ${(props) => props.theme.typography.weight_bold};
    }
  }
  .list {
    .notification {
      display: flex;
      align-items: center;
      transition: background-color 0.3s;
      &__icon {
        flex-basis: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: white;
        background-color: ${(props) => props.theme.colors.main};
        i {
          font-size: ${(props) => props.theme.typography.size_small};
        }
      }
      &__content {
        padding: 0 18px;
        flex-basis: calc(100% - 38px - 60px);
        p {
          font-size: ${(props) => props.theme.typography.size_extra_small};
        }
        p:first-child {
          font-weight: ${(props) => props.theme.typography.weight_bold};
          font-size: ${(props) => props.theme.typography.size_small};
        }
      }
      &__date {
        width: 60px;
        flex-basis: 60px;
        font-size: ${(props) => props.theme.typography.size_extra_small};
        text-align: end;
        overflow-wrap: break-word;
        opacity: 0.8;
      }
      &:hover {
        background-color: ${(props) => props.theme.colors.bgc_dark};
      }
    }
  }
`;

const Notifications: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledIcon
        onClick={() =>
          setShowNotifications((showNotifications) => !showNotifications)
        }
      >
        <i className="fas fa-bell"></i>
      </StyledIcon>
      {showNotifications ? (
        <StyledNotifications>
          <div className="top">
            <h3>Notifications</h3>
            <p>8 new</p>
          </div>
          <ul className="list">
            <li>
              <a href="#" className="notification">
                <div className="notification__icon">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="notification__content">
                  <p>Received Payment</p>
                  <p>Your account has been credited with 100$</p>
                </div>
                <p className="notification__date">Today</p>
              </a>
            </li>
            <li style={{ opacity: 0.5 }}>
              <a href="#" className="notification">
                <div className="notification__icon">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="notification__content">
                  <p>Received Payment</p>
                  <p>Your account has been credited with 100$</p>
                </div>
                <p className="notification__date">Today</p>
              </a>
            </li>
          </ul>
          <div className="bottom">
            <a href="#">Read all notifications</a>
          </div>
        </StyledNotifications>
      ) : null}
    </StyledContainer>
  );
};

export default Notifications;
