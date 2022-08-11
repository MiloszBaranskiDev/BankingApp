import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useDispatch } from "react-redux";
import { editUser } from "redux/slices/UserSlice";
import styled from "styled-components";

import { IUserField } from "interfaces/IUserField";

import StyledButton from "components/styled/StyledButton";
import Field from "../elements/Field";

const UserFields: React.FC = () => {
  const dispatch = useDispatch();
  const userData: IUserField[] = useSelector((state: RootState) => state.user);
  const [currentUserData, setUpdatedUserData] =
    useState<IUserField[]>(userData);

  useEffect(() => {
    setUpdatedUserData(userData);
  }, [userData]);

  const handleSave = () => {
    dispatch(editUser({ updatedArr: currentUserData }));
  };

  return (
    <StyledUserFields>
      <>
        {userData.length > 0 && (
          <>
            {userData.map((field: IUserField) => (
              <Field
                label={field.label}
                type={field.type}
                value={field.value}
                key={field.label}
                currentUserData={currentUserData}
                setUpdatedUserData={setUpdatedUserData}
              />
            ))}
          </>
        )}
        <StyledButton onClick={handleSave} as={"button"}>
          Save changes
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
    .userField {
      flex-basis: 49%;
    }
  }
  h2 {
    margin-bottom: 24px;
  }
  input {
    margin-bottom: 12px;
  }
  button {
    margin-top: 16px;
  }
`;
