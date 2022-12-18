import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { updateSettings } from "redux/slices/SettingsSlice";
import styled from "styled-components";

import { ISettings } from "interfaces/ISettings";
import { ESettingsKey } from "enums/ESettingsKey";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Theme from "components/pages/Settings/parts/Theme";
import General from "components/pages/Settings/parts/General";

const Settings: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const settings: ISettings = useSelector((state: RootState) => state.settings);

  const handleSettingsChange = (
    key: ESettingsKey,
    value: string | boolean
  ): void => {
    dispatch(updateSettings({ key: key, value: value }));
  };

  return (
    <>
      <StyledPageTitle>Settings</StyledPageTitle>
      <StyledBox>
        <Theme
          settings={settings}
          handleSettingsChange={handleSettingsChange}
        />
        <General
          settings={settings}
          handleSettingsChange={handleSettingsChange}
        />
      </StyledBox>
    </>
  );
};

export default Settings;

const StyledBox = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
