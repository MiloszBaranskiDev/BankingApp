import styled from "styled-components";

import { ESettingsKey } from "enums/ESettingsKey";
import { ISettings } from "interfaces/ISettings";

import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";
import ModeSwitcher from "../elements/ModeSwitcher";
import Colors from "../elements/Colors";
import CustomColor from "../elements/CustomColor";

interface IProps {
  settings: ISettings;
  handleSettingsChange: (key: ESettingsKey, value: string | boolean) => void;
}

const Theme: React.FC<IProps> = ({ settings, handleSettingsChange }) => {
  return (
    <StyledTile as={StyledTheme}>
      <StyledHeading>Theme</StyledHeading>
      <ModeSwitcher
        isLightMode={settings[ESettingsKey.isLightMode]}
        handleSettingsChange={handleSettingsChange}
      />
      <Colors handleSettingsChange={handleSettingsChange} />
      <CustomColor
        currentMainColor={settings[ESettingsKey.mainColor]}
        handleSettingsChange={handleSettingsChange}
      />
    </StyledTile>
  );
};

export default Theme;

const StyledTheme = styled.div`
  margin-bottom: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
    flex-basis: 49.3%;
  }
`;
