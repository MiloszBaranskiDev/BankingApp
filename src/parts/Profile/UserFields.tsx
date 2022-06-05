import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import Field from "elements/Profile/Field";

interface IField {
  label: string;
  type: string;
  value: string | number;
}

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

const UserFields: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const fields: IField[] = [
    {
      label: "Login",
      type: "string",
      value: user.login,
    },
    {
      label: "E-mail",
      type: "email",
      value: user.email,
    },
    {
      label: "Phone",
      type: "number",
      value: user.phone,
    },
    {
      label: "Address",
      type: "string",
      value: user.address,
    },
  ];

  return (
    <S_UserFields>
      {fields.map((field) => (
        <Field
          label={field.label}
          type={field.type}
          value={field.value}
          key={field.label}
        />
      ))}
    </S_UserFields>
  );
};

export default UserFields;
