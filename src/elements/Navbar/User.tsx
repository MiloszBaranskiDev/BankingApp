import { url } from "inspector";
import { useState } from "react";
import styled from "styled-components";

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
  width: 85vw;
  max-width: 240px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
`;

const User: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledIcon
        onClick={() => setShowUserMenu((showUserMenu) => !showUserMenu)}
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg')",
        }}
      />
      {showUserMenu ? (
        <StyledUserMenu>
          <p>user</p>
        </StyledUserMenu>
      ) : null}
    </StyledContainer>
  );
};

export default User;
