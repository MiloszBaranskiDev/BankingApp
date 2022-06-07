import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import S_Label from "elements/layout/S_Label";
import S_Input from "elements/layout/S_Input";
import S_Select from "elements/layout/S_Select";
import S_Button from "elements/layout/S_Button";

interface ICurrency {
  symbol: string;
  price?: number;
  amount?: number;
}

interface IFields {
  label: string;
  type: string;
  isSelect?: boolean;
}

const S_Form = styled.form`
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

const fields: IFields[] = [
  {
    label: "Recipient",
    type: "text",
  },
  {
    label: "Account No.",
    type: "text",
  },
  {
    label: "Address",
    type: "text",
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
    type: "text",
  },
];

const Form: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

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

    Object.entries(values).forEach(([key, value]) => {
      const field: HTMLElement | null = document.getElementById(
        `${key.toLowerCase()}`
      );

      value.length === 0
        ? field?.classList.add("field-error")
        : field?.classList.remove("field-error");
    });

    const target: HTMLFormElement = e.target as HTMLFormElement;
    const children: NodeListOf<ChildNode> = target.childNodes;

    children.forEach((child) => {
      const field = child.childNodes[1] as HTMLInputElement | HTMLSelectElement;
      if (field !== undefined) {
        field.nodeName === "SELECT"
          ? (field.value = wallet[0].symbol)
          : (field.value = "");
      }
    });
  };

  return (
    <S_Form onSubmit={(e) => handleSubmit(e)}>
      {fields.map((field) => (
        <div className="transferField" key={field.label}>
          <S_Label htmlFor={field.label.toLowerCase()}>{field.label}</S_Label>
          {!field.isSelect ? (
            <>
              {field.type === "text" ? (
                <S_Input type={field.type} id={field.label.toLowerCase()} />
              ) : (
                <S_Input
                  min={1}
                  // max={wallet.find((item) => item.symbol === "image")!.amount}
                  type={field.type}
                  id={field.label.toLowerCase()}
                />
              )}
            </>
          ) : (
            <S_Select
              defaultValue={wallet[0].symbol}
              id={field.label.toLowerCase()}
            >
              {wallet.map((currency) => (
                <option
                  value={currency.symbol}
                  key={currency.symbol}
                >{`${currency.symbol} (balance: ${currency.amount} ${currency.symbol})`}</option>
              ))}
            </S_Select>
          )}
        </div>
      ))}
      <S_Button as={"button"} type="submit">
        Send transfer
      </S_Button>
    </S_Form>
  );
};

export default Form;
