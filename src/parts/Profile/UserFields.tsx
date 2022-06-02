import styled from "styled-components";
import S_Label from "elements/layout/S_Label";
import S_Input from "elements/layout/S_Input";

const S_UserFields = styled.div`
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

interface IFields {
  label: string;
  type: string;
  value: string | number;
}

const UserFields: React.FC = () => {
  const fields: IFields[] = [
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
    <S_UserFields>
      {fields.map((field) => (
        <div className="userField" key={field.label}>
          <S_Label htmlFor={field.label.toLowerCase()}>{field.label}</S_Label>
          <S_Input
            value={field.value}
            type={field.type}
            id={field.label.toLowerCase()}
          />
        </div>
      ))}
    </S_UserFields>
  );
};

export default UserFields;
