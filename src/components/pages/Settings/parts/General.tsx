import styled from "styled-components";

import { ESettingsKey } from "enums/ESettingsKey";
import { ISettings } from "interfaces/ISettings";

import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";
import FavouriteCurrency from "../elements/FavouriteCurrency";
import Restore from "../elements/Restore";

interface IProps {
  settings: ISettings;
  handleSettingsChange: (key: ESettingsKey, value: string | boolean) => void;
}

const General: React.FC<IProps> = ({ settings, handleSettingsChange }) => {
  return (
    <StyledTile as={StyledGeneral}>
      <StyledHeading>General</StyledHeading>
      <FavouriteCurrency
        favouriteCurrency={settings[ESettingsKey.favouriteCurrency]}
        handleSettingsChange={handleSettingsChange}
      />
      <Restore />
    </StyledTile>
  );
};

export default General;

const StyledGeneral = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49.3%;
  }
`;
