import { useState, useEffect } from "react";
import { Location, useLocation } from "react-router-dom";
import styled from "styled-components";
import S_Wrapper from "components/layout/S_Wrapper";
import Logo from "./elements/Logo";
import User from "./elements/User";
import Links from "./elements/Links";
import Notifications from "./elements/Notifications";
import Hamburger from "./elements/Hamburger";

const S_Navbar = styled.div`
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  .navbarWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Navbar: React.FC = () => {
  const location: Location = useLocation();
  const [openLinks, setOpenLinks] = useState<boolean>(false);

  useEffect(() => {
    setOpenLinks(false);
  }, [location]);

  return (
    <S_Navbar>
      <S_Wrapper className="navbarWrapper">
        <Logo />
        <Links openLinks={openLinks} />
        <Notifications />
        <User />
        <Hamburger openLinks={openLinks} setOpenLinks={setOpenLinks} />
      </S_Wrapper>
    </S_Navbar>
  );
};

export default Navbar;
