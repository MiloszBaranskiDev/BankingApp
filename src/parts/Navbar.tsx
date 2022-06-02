import styled from "styled-components";
import S_Wrapper from "elements/layout/S_Wrapper";
import Logo from "elements/Navbar/Logo";
import User from "elements/Navbar/User";
import Links from "elements/Navbar/Links";
import Notifications from "elements/Navbar/Notifications";

const S_Navbar = styled.div`
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  .navbarWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Navbar: React.FC = () => {
  return (
    <S_Navbar>
      <S_Wrapper className="navbarWrapper">
        <Logo />
        <Links />
        <Notifications />
        <User />
      </S_Wrapper>
    </S_Navbar>
  );
};

export default Navbar;
