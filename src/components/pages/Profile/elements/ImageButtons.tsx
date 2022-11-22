import styled from "styled-components";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { editUser } from "redux/slices/UserSlice";
import React from "react";

import { IUserField } from "interfaces/IUserField";

import StyledButton from "components/styled/StyledButton";

const ImageButtons: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const userData: IUserField[] = useSelector((state: RootState) => state.user);
  const uploadInput =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const updateUserData = (path: string): IUserField[] => {
    const updatedArr = userData.map((field, i) => {
      if (i === userData.findIndex((field) => field.label === "image")) {
        return { ...field, value: path };
      }
      return field;
    });
    return updatedArr;
  };

  const handleUpload = (): void => {
    uploadInput.current?.click();
    uploadInput.current?.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      dispatch(
        editUser({
          updatedArr: updateUserData(URL.createObjectURL(file)),
        })
      );
    });
  };

  const handleRemove = (): void => {
    dispatch(
      editUser({ updatedArr: updateUserData("/user_image_default.png") })
    );
    uploadInput.current!.value = "";
  };

  return (
    <StyledImageButtons>
      <input ref={uploadInput} type="file" accept="image/*" hidden />
      <StyledButton onClick={handleUpload} as="button">
        <i className="fas fa-upload"></i>Upload new photo
      </StyledButton>
      <StyledButton onClick={handleRemove} as="button">
        <i className="fas fa-trash"></i>Remove
      </StyledButton>
    </StyledImageButtons>
  );
};

export default ImageButtons;

const StyledImageButtons = styled.div`
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
