import styled from "styled-components";

import { ESettingsKeys } from "enums/ESettingsKeys";
import { ISettings } from "interfaces/ISettings";

import StyledHeading from "components/styled/StyledHeading";
import FavouriteCurrency from "../elements/FavouriteCurrency";
import Restore from "../elements/Restore";

interface IProps {
  settings: ISettings;
  handleSettingsChange: (key: ESettingsKeys, value: string | boolean) => void;
}

const General: React.FC<IProps> = ({ settings, handleSettingsChange }) => {
  return (
    <StyledGeneral>
      <StyledHeading>General</StyledHeading>
      <FavouriteCurrency
        favouriteCurrency={settings[ESettingsKeys.favouriteCurrency]}
        handleSettingsChange={handleSettingsChange}
      />
      <Restore />
    </StyledGeneral>
  );
};

export default General;

const StyledGeneral = styled.div`
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49.3%;
  }
`;
