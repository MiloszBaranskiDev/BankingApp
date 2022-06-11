import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import React, { useState, useRef, MutableRefObject } from "react";
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

interface IField {
  label: string;
  type: string;
  isSelect?: boolean;
  minLength?: number;
  maxLength?: number;
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
    .field-error {
      border-color: red;
    }
  }
`;

const fields: IField[] = [
  {
    label: "Recipient",
    type: "text",
    maxLength: 80,
  },
  {
    label: "Account No.",
    type: "text",
    maxLength: 28,
  },
  {
    label: "Address",
    type: "text",
    maxLength: 80,
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
    maxLength: 50,
  },
];

const Form: React.FC = () => {
  const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  const initFormData: IFormData[] = [];
  fields.forEach((field) => {
    initFormData.push({
      label: field.label,
      value: field.label !== "Currency" ? "" : wallet[0].symbol,
    });
  });

  const [formData, setFormData] = useState<IFormData[]>(initFormData);

  const handleChange = (label: string, value: string | number) => {
    let newFormData: IFormData[] = [...formData];
    const index: number = formData.findIndex((item) => item.label === label);
    const currentCurrency: string = formData
      .find((item) => item.label === "Currency")!
      .value.toString()!;

    if (label === "Currency") {
      newFormData[index].value = value;
      newFormData.find((item) => item.label === "Amount")!.value = "";
    } else if (label === "Amount") {
      newFormData[index].value = Math.max(
        0.01,
        Math.min(
          wallet.find((item) => item.symbol === currentCurrency)!.amount!,
          Number(value)
        )
      );
    } else {
      newFormData[index].value = value;
    }

    setFormData(newFormData);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    formData.forEach((field: IFormData, i: number) => {
      const fieldElement: HTMLElement = formRef.current?.childNodes[i]
        .lastChild as HTMLElement;

      if (fieldElement.nodeName !== "SELECT") {
        String(field.value).length > 0
          ? fieldElement.classList.remove("field-error")
          : fieldElement.classList.add("field-error");
      }
    });

    console.log(formData);
  };

  return (
    <S_Form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
      {fields.map((field, i: number) => (
        <div className="transferField" key={field.label}>
          <S_Label htmlFor={field.label}>{field.label}</S_Label>
          {!field.isSelect ? (
            <S_Input
              onChange={(e) => handleChange(field.label, e.target.value)}
              value={formData[i].value}
              type={field.type}
              id={field.label}
              maxLength={field.maxLength && field.maxLength}
            />
          ) : (
            <S_Select
              onChange={(e) => handleChange(field.label, e.target.value)}
              value={formData[i].value}
              id={field.label}
            >
              {wallet.map((currency) => (
                <React.Fragment key={currency.symbol}>
                  {currency.amount! >= 0.01 && (
                    <option value={currency.symbol}>
                      {`${currency.symbol} (balance: ${currency.amount} ${currency.symbol})`}
                    </option>
                  )}
                </React.Fragment>
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
