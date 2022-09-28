import { useRef } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { restoreApp } from "redux/slices/SettingsSlice";
import styled from "styled-components";

import StyledButton from "components/styled/StyledButton";

const Restore: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const restoreBtn: any = useRef();

  const handleRestore = () => {
    dispatch(restoreApp());
    restoreBtn.current.classList.add("restored");
    setTimeout(() => {
      restoreBtn.current.classList.remove("restored");
    }, 750);
  };

  return (
    <StyledRestore>
      <p>Restore app to default data and settings</p>
      <StyledButton as="button" ref={restoreBtn} onClick={handleRestore}>
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
  button {
    &.restored {
      background-color: ${(props) => props.theme.colors.green};
    }
  }
`;
