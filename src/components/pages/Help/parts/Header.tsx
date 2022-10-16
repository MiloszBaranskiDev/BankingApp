import StyledPageTitle from "components/styled/StyledPageTitle";
import Description from "../elements/Description";

const Header: React.FC = () => {
  return (
    <header>
      <StyledPageTitle>Help</StyledPageTitle>
      <Description />
    </header>
  );
};

export default Header;
