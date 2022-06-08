import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
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

interface IFormData {
  label: string;
  value: string | number;
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

  const initFormData: IFormData[] = [];
  fields.forEach((field) => {
    initFormData.push({ label: field.label, value: null as any });
  });

  const [formData, setFormData] = useState<IFormData[]>(initFormData);

  const handleChange = (label: string, value: string | number) => {
    const index: number = formData.findIndex((item) => item.label === label);
    let newFormData: IFormData[] = [...formData];
    newFormData[index].value = value;
    setFormData(newFormData);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <S_Form onSubmit={(e) => handleSubmit(e)}>
      {fields.map((field) => (
        <div className="transferField" key={field.label}>
          <S_Label htmlFor={field.label}>{field.label}</S_Label>
          {!field.isSelect ? (
            <S_Input
              onChange={(e) => handleChange(field.label, e.target.value)}
              type={field.type}
              id={field.label}
            />
          ) : (
            <S_Select
              onChange={(e) => handleChange(field.label, e.target.value)}
              defaultValue={wallet[0].symbol}
              id={field.label}
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
