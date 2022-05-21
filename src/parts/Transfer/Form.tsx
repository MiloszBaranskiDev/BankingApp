import styled from "styled-components";
import StyledLabel from "elements/layout/StyledLabel";
import StyledInput from "elements/layout/StyledInput";
import StyledSelect from "elements/layout/StyledSelect";
import StyledButton from "elements/layout/StyledButton";

const StyledForm = styled.form`
  margin-top: 30px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  button {
    margin-top: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .transferField {
      flex-basis: 49%;
    }
  }
  .transferField {
    margin-bottom: 12px;
  }
`;

interface IFields {
  label: string;
  type: string;
  isSelect?: boolean;
}

const Form: React.FC = () => {
  const fields: IFields[] = [
    {
      label: "Recipient",
      type: "string",
    },
    {
      label: "Account No.",
      type: "string",
    },
    {
      label: "Address",
      type: "string",
    },
    {
      label: "Currency",
      isSelect: true,
      type: null as any,
    },
    {
      label: "Amount",
      type: "number",
    },
    {
      label: "Title",
      type: "string",
    },
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const values: object = Array.prototype.slice
      .call(e.target)
      .filter((el) => el.id)
      .reduce(
        (form, el) => ({
          ...form,
          [el.id]: el.value,
        }),
        {}
      );
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      {fields.map((field) => (
        <div className="transferField" key={field.label}>
          <StyledLabel htmlFor={field.label.toLowerCase()}>
            {field.label}
          </StyledLabel>
          {!field.isSelect ? (
            <StyledInput id={field.label.toLowerCase()} type={field.type} />
          ) : (
            <StyledSelect id={field.label.toLowerCase()}>
              <option value="test">test</option>
            </StyledSelect>
          )}
        </div>
      ))}
      <StyledButton as={"button"} type="submit">
        Send transfer
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
