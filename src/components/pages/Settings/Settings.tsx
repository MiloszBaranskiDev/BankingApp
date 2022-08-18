import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { updateSettings } from "redux/slices/SettingsSlice";

import { ISettings } from "interfaces/ISettings";
import { ESettingsKeys } from "enums/SettingsKeys";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Theme from "./parts/Theme";
import Preferences from "./parts/Preferences";

const Settings: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const settings: ISettings = useSelector((state: RootState) => state.settings);

  const handleSettingsChange = (
    key: ESettingsKeys,
    value: string | boolean
  ) => {
    dispatch(updateSettings({ key: key, value: value }));
  };

  return (
    <>
      <StyledPageTitle>Settings</StyledPageTitle>
      <Theme settings={settings} handleSettingsChange={handleSettingsChange} />
      <Preferences
        settings={settings}
        handleSettingsChange={handleSettingsChange}
      />
    </>
  );
};

export default Settings;
