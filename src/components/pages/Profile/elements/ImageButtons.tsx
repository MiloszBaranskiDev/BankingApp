import styled from "styled-components";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { editUser } from "redux/slices/UserSlice";
import React from "react";

import StyledButton from "components/styled/StyledButton";

import { IUser } from "interfaces/IUser";
import { EUserKey } from "enums/EUserKey";

const ImageButtons: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const user: IUser = useSelector((state: RootState) => state.user);

  const uploadInput =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleUpload = (): void => {
    uploadInput.current?.click();
    uploadInput.current?.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];

      dispatch(
        editUser({
          updatedUser: { ...user, [EUserKey.image]: URL.createObjectURL(file) },
        })
      );
    });
  };

  const handleRemove = (): void => {
    dispatch(
      editUser({
        updatedUser: { ...user, [EUserKey.image]: "/user_image_default.png" },
      })
    );

    uploadInput.current!.value = "";
  };

  return (
    <StyledImageButtons>
      <input ref={uploadInput} type="file" accept="image/*" hidden />
      <StyledButton onClick={handleUpload}>
        <i className="fas fa-upload"></i>Upload new photo
      </StyledButton>
      <StyledButton onClick={handleRemove}>
        <i className="fas fa-trash"></i>Remove
      </StyledButton>
    </StyledImageButtons>
  );
};

export default ImageButtons;

const StyledImageButtons = styled.div`
  flex-basis: calc(100% - 112px);
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
  button {
    display: inline-block;
    &:last-child {
      margin-top: 10px;
      background-color: ${(props) => props.theme.colors.bgc_dark};
      color: ${(props) => props.theme.colors.main};
      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        margin-top: 0;
        margin-left: 10px;
      }
    }
  }
`;
