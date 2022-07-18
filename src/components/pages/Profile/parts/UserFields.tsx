import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { IUserField } from "interfaces/IUserField";

import Field from "../elements/Field";

const UserFields: React.FC = () => {
  const userFields: IUserField[] = useSelector(
    (state: RootState) => state.user
  );

  return (
    <StyledUserFields>
      {userFields.map((field: IUserField) => (
        <Field
          label={field.label}
          type={field.type}
          value={field.value}
          key={field.label}
        />
      ))}
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
`;
