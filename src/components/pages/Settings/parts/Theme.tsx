import styled from "styled-components";

import StyledHeading from "components/styled/StyledHeading";
import StyledButton from "components/styled/StyledButton";
import ModeSwitcher from "../elements/ModeSwitcher";
import Color from "../elements/Color";

interface Props {
  theme: any;
  setTheme: (arg0: any) => void;
}

const Theme: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <StyledTheme>
      <StyledHeading>Theme</StyledHeading>
      <ModeSwitcher theme={theme} setTheme={setTheme} />
      <Color theme={theme} setTheme={setTheme} />
      <StyledButton as={"button"}>Reset to default</StyledButton>
    </StyledTheme>
  );
};

export default Theme;

const StyledTheme = styled.div`
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
`;
