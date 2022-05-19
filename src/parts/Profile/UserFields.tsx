import styled from "styled-components";
import StyledLabel from "elements/layout/StyledLabel";
import StyledInput from "elements/layout/StyledInput";

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

interface FieldsInterface {
  label: string;
  type: string;
  value: string | number;
}

const UserFields: React.FC = () => {
  const fields: FieldsInterface[] = [
    {
      label: "Login",
      type: "string",
      value: null as any,
    },
    {
      label: "E-mail",
      type: "email",
      value: null as any,
    },
    {
      label: "Phone",
      type: "number",
      value: null as any,
    },
    {
      label: "Address",
      type: "string",
      value: null as any,
    },
  ];

  return (
    <StyledUserFields>
      {fields.map((field) => (
        <div className="userField" key={field.label}>
          <StyledLabel htmlFor={field.label.toLowerCase()}>
            {field.label}
          </StyledLabel>
          <StyledInput
            value={field.value}
            type={field.type}
            id={field.label.toLowerCase()}
          />
        </div>
      ))}
    </StyledUserFields>
  );
};

export default UserFields;
