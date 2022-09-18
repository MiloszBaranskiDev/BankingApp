import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { restoreApp } from "redux/slices/SettingsSlice";

import StyledButton from "components/styled/StyledButton";

const Restore: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <p>Restore app to default data and settings</p>
      <StyledButton onClick={() => dispatch(restoreApp())}>
        Restore
      </StyledButton>
    </div>
  );
};

export default Restore;
