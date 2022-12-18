import styled from "styled-components";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState } from "redux/store";
import { useSelector, useDispatch } from "react-redux";
import { updateWalletCurrencies } from "redux/slices/WalletSlice";
import { addTransaction } from "redux/slices/TransactionsSlice";
import { Dispatch } from "@reduxjs/toolkit";

import GetRandomId from "utils/GeRandomId";
import GetTodayDate from "utils/GetTodayDate";

import PreventDotInInput from "helpers/PreventDotInInput";

import FieldError from "components/FieldError";
import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";
import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";
import StyledSelect from "components/styled/StyledSelect";
import StyledButton from "components/styled/StyledButton";

import { ETransationType } from "enums/ETransactionType";
import { ICurrency } from "interfaces/ICurrency";
import { IWallet } from "interfaces/IWallet";
import { ETransferKey } from "enums/ETransferKey";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ETransactionCategory } from "enums/ETransactionCategory";

interface IProps {
  setShowSummary: (arg0: boolean) => void;
}

interface ITransferData {
  title: string;
  recipient: string;
  account: number;
  address: string;
  currency_symbol: ECurrencySymbol;
  amount: number;
}

const Form: React.FC<IProps> = ({ setShowSummary }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ITransferData>();

  const dispatch: Dispatch = useDispatch();

  const transferString: string = "transfer";

  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  const getDefaultCurrency = (): ICurrency | undefined => {
    return wallet.currencies.find((currency) => currency.balance! >= 1);
  };

  const [currentCurrency, setCurrentCurrency] = useState<ICurrency>(
    getDefaultCurrency()!
  );

  const handleCurrencyChange = (currencySymbol: string): void => {
    const selectedCurrency: ICurrency = wallet.currencies.find(
      (currency) => currency.symbol === currencySymbol
    )!;
    setCurrentCurrency(selectedCurrency);
  };

  const handleTransferSubmit: SubmitHandler<ITransferData> = (transferData) => {
    dispatch(
      updateWalletCurrencies({
        symbol: transferData.currency_symbol,
        balance: currentCurrency.balance! - transferData.amount,
      })
    );

    dispatch(
      addTransaction({
        type: ETransationType.outcome,
        category: ETransactionCategory.outgoingTransfer,
        currencySymbol: transferData.currency_symbol,
        amount: transferData.amount,
        id: GetRandomId(),
        date: GetTodayDate(),
        details: transferData,
      })
    );

    setShowSummary(true);
  };

  return (
    <>
      {getDefaultCurrency() !== undefined ? (
        <StyledTile
          as={StyledForm}
          onSubmit={handleSubmit(handleTransferSubmit)}
        >
          <StyledFields>
            <StyledField>
              <StyledLabel htmlFor={transferString + ETransferKey.title}>
                Title
              </StyledLabel>
              <StyledInput
                id={transferString + ETransferKey.title}
                minLength={5}
                maxLength={50}
                {...register(`${ETransferKey.title}`, {
                  required: true,
                })}
              />
              {errors.title?.type === "required" && <FieldError />}
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor={transferString + ETransferKey.recipient}>
                Recipient
              </StyledLabel>
              <StyledInput
                id={transferString + ETransferKey.recipient}
                minLength={2}
                maxLength={80}
                {...register(`${ETransferKey.recipient}`, {
                  required: true,
                })}
              />
              {errors.recipient?.type === "required" && <FieldError />}
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor={transferString + ETransferKey.account}>
                Account No.
              </StyledLabel>
              <StyledInput
                id={transferString + ETransferKey.account}
                type="number"
                minLength={10}
                maxLength={28}
                {...register(`${ETransferKey.account}`, {
                  required: true,
                })}
                onKeyDown={(e) => PreventDotInInput(e)}
              />
              {errors.account?.type === "required" && <FieldError />}
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor={transferString + ETransferKey.address}>
                Address
              </StyledLabel>
              <StyledInput
                id={transferString + ETransferKey.address}
                minLength={6}
                maxLength={80}
                {...register(`${ETransferKey.address}`, {
                  required: true,
                })}
              />
              {errors.address?.type === "required" && <FieldError />}
            </StyledField>
            <StyledField>
              <StyledLabel
                htmlFor={transferString + ETransferKey.currencySymbol}
              >
                Currency
              </StyledLabel>
              <StyledSelect
                id={transferString + ETransferKey.currencySymbol}
                defaultValue={getDefaultCurrency()?.symbol}
                {...register(`${ETransferKey.currencySymbol}`, {
                  required: true,
                })}
                onChange={(e) => handleCurrencyChange(e.target.value)}
              >
                {wallet.currencies.map((currency) => (
                  <option
                    key={currency.symbol}
                    disabled={currency.balance! >= 1 ? false : true}
                    value={currency.symbol}
                  >
                    {currency.symbol} (balance: {currency.balance})
                  </option>
                ))}
              </StyledSelect>
              {errors.currency_symbol?.type === "required" && <FieldError />}
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor={transferString + ETransferKey.amount}>
                Amount
              </StyledLabel>
              <StyledInput
                id={transferString + ETransferKey.amount}
                type="number"
                step="0.01"
                min={1}
                max={currentCurrency.balance}
                {...register(`${ETransferKey.amount}`, {
                  valueAsNumber: true,
                  required: true,
                })}
                onKeyDown={(e) => PreventDotInInput(e)}
              />
              {errors.amount?.type === "required" && <FieldError />}
            </StyledField>
          </StyledFields>
          <StyledButton type="submit">
            <i className="fas fa-paper-plane"></i>Send transfer
          </StyledButton>
        </StyledTile>
      ) : (
        <StyledHeading>
          Your balance is too small to send a transfer.
        </StyledHeading>
      )}
    </>
  );
};

export default Form;

const StyledForm = styled.form`
  button {
    margin-top: 20px;
  }
`;

const StyledFields = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledField = styled.div`
  margin-bottom: 12px;
  option:disabled {
    color: ${(props) => props.theme.colors.red};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49%;
  }
`;
