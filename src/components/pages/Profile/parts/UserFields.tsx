import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { editUser } from "redux/slices/UserSlice";
import styled from "styled-components";

import { IUser } from "interfaces/IUser";
import { EUserKey } from "enums/EUserKey";

import StyledButton from "components/styled/StyledButton";
import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";
import FieldError from "components/FieldError";

import AnimateButton from "helpers/AnimateButton";

const UserFields: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>();

  const saveBtn = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const dispatch: Dispatch = useDispatch();

  const user: IUser = useSelector((state: RootState) => state.user);

  const handleUserFields: SubmitHandler<IUser> = (formData) => {
    const updatedUser: IUser = { ...formData, [EUserKey.image]: user.image };
    if (JSON.stringify(user) !== JSON.stringify(updatedUser)) {
      dispatch(editUser({ updatedUser: updatedUser }));
      AnimateButton(saveBtn);
    }
  };

  return (
    <StyledUserFields>
      <>
        <form onSubmit={handleSubmit(handleUserFields)}>
          <div>
            <StyledLabel htmlFor={"user-field-" + EUserKey.name}>
              {EUserKey.name}
            </StyledLabel>
            <StyledInput
              id={"user-field-" + EUserKey.name}
              type="text"
              minLength={4}
              maxLength={30}
              defaultValue={user.name}
              {...register(`${EUserKey.name}`, {
                required: true,
              })}
            />
            {errors.name?.type === "required" && <FieldError />}
          </div>
          <div>
            <StyledLabel htmlFor={"user-field-" + EUserKey.email}>
              {EUserKey.email}
            </StyledLabel>
            <StyledInput
              id={"user-field-" + EUserKey.email}
              type="email"
              defaultValue={user.email}
              {...register(`${EUserKey.email}`, {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email?.type === "required" && <FieldError />}
            {errors.email?.message && (
              <FieldError text={errors.email?.message} />
            )}
          </div>
          <div>
            <StyledLabel htmlFor={"user-field-" + EUserKey.phone}>
              {EUserKey.phone}
            </StyledLabel>
            <StyledInput
              id={"user-field-" + EUserKey.phone}
              type="text"
              minLength={9}
              maxLength={9}
              defaultValue={user.phone}
              {...register(`${EUserKey.phone}`, {
                required: true,
              })}
            />
            {errors.phone?.type === "required" && <FieldError />}
          </div>
          <div>
            <StyledLabel htmlFor={"user-field-" + EUserKey.address}>
              {EUserKey.address}
            </StyledLabel>
            <StyledInput
              id={"user-field-" + EUserKey.address}
              type="text"
              minLength={5}
              maxLength={60}
              defaultValue={user.address}
              {...register(`${EUserKey.address}`, {
                required: true,
              })}
            />
            {errors.address?.type === "required" && <FieldError />}
          </div>
          <StyledButton ref={saveBtn} type="submit">
            <i className="fas fa-check"></i>Save changes
          </StyledButton>
        </form>
      </>
    </StyledUserFields>
  );
};

export default UserFields;

const StyledUserFields = styled.div`
  margin-top: 30px;
  form {
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        flex-basis: 49%;
      }
    }
    input {
      margin-bottom: 20px;
    }
    button {
      margin-top: 16px;
    }
  }
`;
