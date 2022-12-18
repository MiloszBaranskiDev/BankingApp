import React from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { restoreApp } from "redux/slices/SettingsSlice";
import styled from "styled-components";

import StyledButton from "components/styled/StyledButton";

const Restore: React.FC = () => {
  const restoreBtn =
    React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const dispatch: Dispatch = useDispatch();

  const handleRestore = (): void => {
    dispatch(restoreApp());
    restoreBtn.current.classList.add("restored");
    setTimeout(() => {
      restoreBtn.current.classList.remove("restored");
    }, 750);
  };

  return (
    <StyledRestore>
      <p>Restore app to default data and settings</p>
      <StyledButton ref={restoreBtn} onClick={handleRestore}>
        <i className="fas fa-redo-alt"></i>Restore
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
