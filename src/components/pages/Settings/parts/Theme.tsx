import styled from "styled-components";

import { ESettingsKeys } from "enums/ESettingsKeys";
import { ISettings } from "interfaces/ISettings";

import StyledHeading from "components/styled/StyledHeading";
import ModeSwitcher from "../elements/ModeSwitcher";
import Colors from "../elements/Colors";
import CustomColor from "../elements/CustomColor";

interface IProps {
  settings: ISettings;
  handleSettingsChange: (key: ESettingsKeys, value: string | boolean) => void;
}

const Theme: React.FC<IProps> = ({ settings, handleSettingsChange }) => {
  return (
    <StyledTheme>
      <StyledHeading>Theme</StyledHeading>
      <ModeSwitcher
        isLightMode={settings[ESettingsKeys.isLightMode]}
        handleSettingsChange={handleSettingsChange}
      />
      <Colors handleSettingsChange={handleSettingsChange} />
      <CustomColor
        currentMainColor={settings[ESettingsKeys.mainColor]}
        handleSettingsChange={handleSettingsChange}
      />
    </StyledTheme>
  );
};

export default Theme;

const StyledTheme = styled.div`
  margin-bottom: 16px;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
    flex-basis: 49.3%;
  }
`;
