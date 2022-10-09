import { useEffect, useState, useRef, MutableRefObject } from "react";
import { RootState } from "redux/store";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { updateWalletCurrencies } from "redux/slices/WalletSlice";
import { addTransaction } from "redux/slices/TransactionsSlice";
import styled from "styled-components";

import GetTodayDate from "utils/GetTodayDate";
import GetRandomId from "utils/GeRandomId";

import { IWallet } from "interfaces/IWallet";

import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";
import StyledSelect from "components/styled/StyledSelect";
import StyledButton from "components/styled/StyledButton";
import StyledHeading from "components/styled/StyledHeading";
import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";

interface IProps {
  setShowSummary: (arg0: boolean) => void;
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

const Form: React.FC<IProps> = ({ setShowSummary }) => {
  const dispatch: Dispatch = useDispatch();

  const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);

  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  const [zeroBalance, setZeroBalance] = useState<boolean>(true);

  const getDefaultCurrency = () => {
    return wallet.currencies.find((currency) => currency.balance! >= 0.01);
  };

  useEffect(() => {
    if (getDefaultCurrency() === undefined) {
      setZeroBalance(true);
    } else {
      setZeroBalance(false);
    }
  }, [wallet]);

  const initFormData: IFormData[] = [];
  if (getDefaultCurrency() !== undefined) {
    fields.forEach((field) => {
      initFormData.push({
        label: field.label,
        value: field.label !== "Currency" ? "" : getDefaultCurrency()!.symbol,
      });
    });
  }

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
          wallet.currencies.find((item) => item.symbol === currentCurrency)!
            .balance!,
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
    let canBeSubmited: boolean = true;

    formData.forEach((field, i: number) => {
      const fieldElement: HTMLElement = formRef.current?.childNodes[i]
        .lastChild as HTMLElement;

      if (fieldElement.nodeName !== "SELECT") {
        if (String(field.value).length > 0) {
          fieldElement.classList.remove("field-error");
        } else {
          fieldElement.classList.add("field-error");
          canBeSubmited = false;
        }
      }
    });

    if (canBeSubmited) {
      const currencySymbol = formData
        .find((item) => item.label === "Currency")!
        .value.toString() as ECurrenciesSymbols;

      const currencyBalance: number = wallet.currencies.find(
        (item) => item.symbol === currencySymbol
      )!.balance!;

      const amount: number | string = formData.find(
        (item) => item.label === "Amount"
      )!.value;

      dispatch(
        updateWalletCurrencies({
          symbol: currencySymbol,
          balance: currencyBalance - Number(amount),
        })
      );

      dispatch(
        addTransaction({
          category: "Outgoing transfer",
          id: GetRandomId(),
          date: GetTodayDate(),
          details: formData.map((item) => ({ ...item })),
        })
      );

      setShowSummary(true);
    }
  };

  return (
    <>
      {!zeroBalance && getDefaultCurrency() !== undefined ? (
        <>
          <StyledForm ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <>
              {fields.map((field, i: number) => (
                <div className="transferField" key={field.label}>
                  <StyledLabel htmlFor={field.label}>{field.label}</StyledLabel>
                  {!field.isSelect ? (
                    <StyledInput
                      onChange={(e) =>
                        handleChange(field.label, e.target.value)
                      }
                      value={formData[i].value}
                      type={field.type}
                      id={field.label}
                      maxLength={field.maxLength && field.maxLength}
                    />
                  ) : (
                    <StyledSelect
                      onChange={(e) =>
                        handleChange(field.label, e.target.value)
                      }
                      value={formData[i].value}
                      id={field.label}
                    >
                      {wallet.currencies.map((currency) => (
                        <option
                          value={currency.symbol}
                          disabled={currency.balance! >= 0.01 ? false : true}
                          key={currency.symbol}
                        >
                          {`${currency.symbol} (balance: ${currency.balance} ${currency.symbol})`}
                        </option>
                      ))}
                    </StyledSelect>
                  )}
                </div>
              ))}
              <StyledButton as={"button"} type="submit">
                Send transfer
              </StyledButton>
            </>
          </StyledForm>
        </>
      ) : (
        <StyledHeading>
          You don't have the balance to make a transfer!
        </StyledHeading>
      )}
    </>
  );
};

export default Form;

const StyledForm = styled.form`
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
      border-color: ${(props) => props.theme.colors.red};
    }
    option:disabled {
      color: ${(props) => props.theme.colors.red};
    }
  }
`;
