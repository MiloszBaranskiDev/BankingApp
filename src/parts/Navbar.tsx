import styled from "styled-components";
import StyledWrapper from "elements/layout/StyledWrapper";
import Logo from "elements/Navbar/Logo";
import Circles from "elements/Navbar/Circles";

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.bgc};
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
        <Circles />
      </StyledWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
