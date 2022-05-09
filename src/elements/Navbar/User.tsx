import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled.button``;

const StyledUserMenu = styled.div``;

const User: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledIcon
        onClick={() => setShowUserMenu((showUserMenu) => !showUserMenu)}
      >
        <img src="" alt="user" />
      </StyledIcon>
      {showUserMenu ? (
        <StyledUserMenu>
          <p>user</p>
        </StyledUserMenu>
      ) : null}
    </StyledContainer>
  );
};

export default User;
