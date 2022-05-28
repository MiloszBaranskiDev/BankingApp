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
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .transferField {
      flex-basis: 49%;
    }
  }
  button {
    margin-top: 20px;
  }
  .transferField {
    margin-bottom: 12px;
    .field-error {
      color: red;
      border-color: red;
    }
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

    // get fields
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

    // check if field is not empty
    Object.entries(values).forEach(([key, value]) => {
      const field: HTMLElement | null = document.getElementById(
        `${key.toLowerCase()}`
      );
      value.length === 0
        ? field?.classList.add("field-error")
        : field?.classList.remove("field-error");
    });

    // clear values
    const target: HTMLFormElement = e.target as HTMLFormElement;
    const children: NodeListOf<ChildNode> = target.childNodes;
    children.forEach((child: ChildNode) => {
      const field = child.childNodes[1] as HTMLInputElement | HTMLSelectElement;
      if (field?.nodeName === "INPUT" || field?.nodeName === "SELECT") {
        field.value = "";
      }
    });
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      {fields.map((field) => (
        <div className="transferField" key={field.label}>
          <StyledLabel htmlFor={field.label.toLowerCase()}>
            {field.label}
          </StyledLabel>
          {!field.isSelect ? (
            <StyledInput type={field.type} id={field.label.toLowerCase()} />
          ) : (
            <StyledSelect id={field.label.toLowerCase()}>
              <option value="PLN">{"PLN (balance: 200zł)"}</option>
              <option value="EUR">{"EUR (balance: 35€)"}</option>
              <option value="USD">{"USD (balance: 40$)"}</option>
              <option value="CHF">{"CHF (balance: 25₣)"}</option>
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
