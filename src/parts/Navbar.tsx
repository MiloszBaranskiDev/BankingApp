import styled from "styled-components";
import StyledWrapper from "elements/layout/StyledWrapper";
import Logo from "elements/Navbar/Logo";
import Links from "elements/Navbar/Links";
import Notifications from "elements/Navbar/Notifications";

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 10px 0;
  .navbarWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <StyledWrapper className="navbarWrapper">
        <Logo />
        <Links />
        <Notifications />
      </StyledWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
