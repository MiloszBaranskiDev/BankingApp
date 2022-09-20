import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { restoreApp } from "redux/slices/SettingsSlice";
import styled from "styled-components";

import StyledButton from "components/styled/StyledButton";

const Restore: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  return (
    <StyledRestore>
      <p>Restore app to default data and settings</p>
      <StyledButton onClick={() => dispatch(restoreApp())}>
        Restore
      </StyledButton>
    </StyledRestore>
  );
};

export default Restore;

const StyledRestore = styled.div`
  margin-top: 20px;
  p {
    margin-bottom: 10px;
  }
`;
