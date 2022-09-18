import styled from "styled-components";

import { ESettingsKeys } from "enums/ESettingsKeys";
import { ISettings } from "interfaces/ISettings";

import StyledHeading from "components/styled/StyledHeading";
import FavouriteCurrency from "../elements/FavouriteCurrency";
import LocalStorage from "../elements/LocalStorage";
import Restore from "../elements/Restore";

interface Props {
  settings: ISettings;
  handleSettingsChange: (key: ESettingsKeys, value: string | boolean) => void;
}

const Preferences: React.FC<Props> = ({ settings, handleSettingsChange }) => {
  return (
    <StyledPreferences>
      <StyledHeading>Preferences</StyledHeading>
      <FavouriteCurrency
        favouriteCurrency={settings[ESettingsKeys.favouriteCurrency]}
        handleSettingsChange={handleSettingsChange}
      />
      <LocalStorage />
      <Restore />
    </StyledPreferences>
  );
};

export default Preferences;

const StyledPreferences = styled.div`
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
`;
