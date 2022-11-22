import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { editUser } from "redux/slices/UserSlice";
import styled from "styled-components";

import { IUserField } from "interfaces/IUserField";

import StyledButton from "components/styled/StyledButton";
import Field from "../elements/Field";

const UserFields: React.FC = () => {
  const saveBtn = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const dispatch: Dispatch = useDispatch();
  const userData: IUserField[] = useSelector((state: RootState) => state.user);

  const [indexesOfEmptyInputs, setIndexesOfEmptyInputs] = useState<number[]>(
    []
  );
  const [currentUserData, setUpdatedUserData] =
    useState<IUserField[]>(userData);

  useEffect(() => {
    setUpdatedUserData(userData);
  }, [userData]);

  const handleSave = (): void => {
    if (!currentUserData.some((field) => field.value === "")) {
      setIndexesOfEmptyInputs([]);
      dispatch(editUser({ updatedArr: currentUserData }));

      saveBtn.current?.classList.add("saved");

      setTimeout(() => {
        saveBtn.current?.classList.remove("saved");
      }, 750);
    } else {
      currentUserData.forEach((field, i: number) => {
        field.value === "" && setIndexesOfEmptyInputs((old) => [...old, i]);
      });
    }
  };

  return (
    <StyledUserFields>
      <>
        {userData.length > 0 && (
          <>
            {userData.map((field: IUserField, i: number) => (
              <Field
                key={field.label}
                label={field.label}
                type={field.type}
                value={field.value}
                hasError={indexesOfEmptyInputs.some(
                  (emptyInputIndex) => emptyInputIndex === i
                )}
                currentUserData={currentUserData}
                setUpdatedUserData={setUpdatedUserData}
              />
            ))}
          </>
        )}
        <StyledButton ref={saveBtn} onClick={handleSave} as={"button"}>
          <i className="fas fa-check"></i>Save changes
        </StyledButton>
      </>
    </StyledUserFields>
  );
};

export default UserFields;

const StyledUserFields = styled.div`
  margin-top: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  button {
    margin-top: 16px;
    transition: all 0.3s;
    &.saved {
      background-color: ${(props) => props.theme.colors.green};
    }
  }
`;
