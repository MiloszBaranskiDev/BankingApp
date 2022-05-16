import styled from "styled-components";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import Text from "elements/Help/Text";

const StyledHeader = styled.div``;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledPageTitle>Help</StyledPageTitle>
      <Text />
    </StyledHeader>
  );
};

export default Header;
