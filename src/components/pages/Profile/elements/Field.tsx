import styled from "styled-components";

import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";

import { IUserField } from "interfaces/IUserField";

interface IProps {
  label: string;
  type: string;
  value: string;
  currentUserData: IUserField[];
  setUpdatedUserData: (arg0: IUserField[]) => void;
  hasError: boolean;
}

const Field: React.FC<IProps> = ({
  label,
  type,
  value,
  currentUserData,
  setUpdatedUserData,
  hasError,
}) => {
  const handleChange = (value: string) => {
    const updatedArr = currentUserData.map((field, i) => {
      if (i === currentUserData.findIndex((field) => field.label === label)) {
        return { ...field, value: value };
      }

      return field;
    });

    setUpdatedUserData(updatedArr);
  };

  return (
    <>
      {type && (
        <StyledField>
          <StyledLabel htmlFor={label}>{label}</StyledLabel>
          <StyledInput
            onChange={(e) => handleChange(String(e.target.value))}
            defaultValue={type !== "number" ? value : Number(value)}
            className={`${hasError && "input-error"}`}
            type={type}
          />
        </StyledField>
      )}
    </>
  );
};

export default Field;

const StyledField = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49%;
  }
  input {
    margin-bottom: 20px;
    &.input-error {
      border: 1px solid ${(props) => props.theme.colors.red};
    }
  }
`;
