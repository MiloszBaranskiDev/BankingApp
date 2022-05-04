import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

const StyledBtn = styled.button`
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
  padding: 14px;
  width: 85vw;
  max-width: 360px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
`;

const Notifications: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledBtn
        onClick={() =>
          setShowNotifications((showNotifications) => !showNotifications)
        }
      >
        <i className="fas fa-bell"></i>
      </StyledBtn>
      {showNotifications ? (
        <StyledNotifications>
          <div className="top">
            <h3>Notifications</h3>
            <p>8 new</p>
          </div>
          <ul className="list">
            <li>
              <div className="notification">
                <div className="notification__icon"></div>
                <div className="notification__content">
                  <p>Received Payment</p>
                  <p>Your account has been credited with 100$</p>
                </div>
                <p className="notification__date">Today</p>
              </div>
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
