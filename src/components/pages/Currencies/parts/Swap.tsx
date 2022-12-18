import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateWalletCurrencies } from "redux/slices/WalletSlice";
import { addTransaction } from "redux/slices/TransactionsSlice";
import { Dispatch } from "@reduxjs/toolkit";

import AnimateButton from "helpers/AnimateButton";
import PreventDotInInput from "helpers/PreventDotInInput";

import { ICurrency } from "interfaces/ICurrency";
import { ICurrencyRate } from "interfaces/ICurrencyRate";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ETransationType } from "enums/ETransactionType";
import { ETransactionCategory } from "enums/ETransactionCategory";

import StyledHeading from "components/styled/StyledHeading";
import StyledSelect from "components/styled/StyledSelect";
import StyledInput from "components/styled/StyledInput";
import StyledTile from "components/styled/StyledTile";
import StyledButton from "components/styled/StyledButton";
import SwapArrows from "../elements/SwapArrows";
import FieldError from "components/FieldError";

import GetTodayDate from "utils/GetTodayDate";
import GetRandomId from "utils/GeRandomId";

enum ESwapKey {
  fromSymbol = "fromSymbol",
  fromAmount = "fromAmount",
  toSymbol = "toSymbol",
  toAmount = "toAmount",
}

enum EDirection {
  from,
  to,
}

interface IProps {
  currencies: ICurrency[];
  currenciesRates: ICurrencyRate[];
}

interface ISwapData {
  [ESwapKey.fromSymbol]: ECurrencySymbol;
  [ESwapKey.fromAmount]: number;
  [ESwapKey.toSymbol]: ECurrencySymbol;
  [ESwapKey.toAmount]: number;
}

interface IMinMaxInputAmounts {
  fromMin: number | null;
  fromMax: number | null;
  toMin: number | null;
  toMax: number | null;
}

const Swap: React.FC<IProps> = ({ currencies, currenciesRates }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<ISwapData>();
  const dispatch: Dispatch = useDispatch();

  const swapBtn = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const firstCurrency: ICurrency = currencies.find(
    (currency) => currency.balance! >= 5
  )!;

  const defaultSwapData: ISwapData = {
    [ESwapKey.fromSymbol]: firstCurrency?.symbol!,
    [ESwapKey.fromAmount]: 0,
    [ESwapKey.toSymbol]: currencies.find(
      (currency) => currency.symbol !== firstCurrency.symbol
    )!.symbol,
    [ESwapKey.toAmount]: 0,
  };

  const [swapData, setSwapData] = useState<ISwapData>(defaultSwapData);

  const [minMaxInputAmounts, setMinMaxInputAmounts] =
    useState<IMinMaxInputAmounts>({
      fromMin: null,
      fromMax: null,
      toMin: null,
      toMax: null,
    });

  const reverseSwap = (): void => {
    setSwapData({
      [ESwapKey.fromSymbol]: swapData.toSymbol,
      [ESwapKey.fromAmount]: swapData.toAmount,
      [ESwapKey.toSymbol]: swapData.fromSymbol,
      [ESwapKey.toAmount]: swapData.fromAmount,
    });
  };

  const getCurrencyRate = (currencySymbol: ECurrencySymbol): number => {
    return currenciesRates.find((rate) => rate.symbol === currencySymbol)
      ?.price!;
  };

  const getCurrencyBalance = (currencySymbol: ECurrencySymbol): number => {
    return currencies.find((currency) => currency.symbol === currencySymbol)
      ?.balance!;
  };

  const getBalanceAfter = (
    currencySymbol: ECurrencySymbol,
    direction: EDirection
  ): number => {
    const currentBalance: number = getCurrencyBalance(currencySymbol);

    const balanceAfter: number =
      direction === EDirection.from
        ? currentBalance - swapData.fromAmount
        : currentBalance + swapData.toAmount;

    return Number(balanceAfter.toFixed(2));
  };

  const handleSwapData = (
    key: ESwapKey,
    value: ECurrencySymbol | number
  ): void => {
    let updatedSwapData: ISwapData = { ...swapData };
    updatedSwapData = { ...updatedSwapData, [key]: value };

    const updateSwapData = (isFromAmountToUpdate: boolean): void => {
      let multiplier: number;
      const bool: boolean = isFromAmountToUpdate;

      if (
        updatedSwapData[bool ? ESwapKey.fromSymbol : ESwapKey.toSymbol] ===
        ECurrencySymbol.pln
      ) {
        multiplier =
          1 /
          getCurrencyRate(
            bool ? updatedSwapData.toSymbol : updatedSwapData.fromSymbol
          );
      } else {
        multiplier =
          updatedSwapData[bool ? ESwapKey.toSymbol : ESwapKey.fromSymbol] ===
          ECurrencySymbol.pln
            ? getCurrencyRate(
                bool ? updatedSwapData.fromSymbol : updatedSwapData.toSymbol
              )
            : getCurrencyRate(
                bool ? updatedSwapData.fromSymbol : updatedSwapData.toSymbol
              ) /
              getCurrencyRate(
                bool ? updatedSwapData.toSymbol : updatedSwapData.fromSymbol
              );
      }

      updatedSwapData[bool ? ESwapKey.toAmount : ESwapKey.fromAmount] = Number(
        (
          updatedSwapData[bool ? ESwapKey.fromAmount : ESwapKey.toAmount] *
          multiplier
        ).toFixed(2)
      );
    };

    switch (key) {
      case ESwapKey.fromAmount:
      case ESwapKey.toSymbol:
        updateSwapData(true);
        break;
      case ESwapKey.toAmount:
      case ESwapKey.fromSymbol:
        updateSwapData(false);
        break;
      default:
        break;
    }

    setSwapData(updatedSwapData);
  };

  const handleSwapSubmit: SubmitHandler<ISwapData> = (formData) => {
    dispatch(
      updateWalletCurrencies({
        symbol: formData.fromSymbol,
        balance: getCurrencyBalance(formData.fromSymbol) - formData.fromAmount,
      })
    );

    dispatch(
      updateWalletCurrencies({
        symbol: formData.toSymbol,
        balance: getCurrencyBalance(formData.toSymbol) + formData.toAmount,
      })
    );

    dispatch(
      addTransaction({
        type: ETransationType.swap,
        category: ETransactionCategory.swap,
        currencySymbol: null,
        amount: null,
        date: GetTodayDate(),
        id: GetRandomId(),
        details: {
          from: formData.fromAmount + " " + formData.fromSymbol,
          to: formData.toAmount + " " + formData.toSymbol,
          rate: Number((formData.toAmount / formData.fromAmount).toFixed(2)),
        },
      })
    );

    AnimateButton(swapBtn);

    reset();
  };

  useEffect(() => {
    Object.entries(swapData).forEach(([key, value]) =>
      setValue(key as ESwapKey, value)
    );
    // eslint-disable-next-line
  }, [swapData]);

  useEffect(() => {
    setSwapData(defaultSwapData);
    // eslint-disable-next-line
  }, [currencies]);

  return (
    <StyledTile as={StyledSwap}>
      {firstCurrency && currencies.length >= 2 ? (
        <StyledForm onSubmit={handleSubmit(handleSwapSubmit)}>
          <>
            <StyledSwapCurrency>
              <StyledHeading>From</StyledHeading>
              <StyledSelect
                value={swapData.fromSymbol}
                {...register(`${ESwapKey.fromSymbol}`, {
                  required: true,
                })}
                onChange={(e) =>
                  handleSwapData(
                    ESwapKey.fromSymbol,
                    e.target.value as ECurrencySymbol
                  )
                }
              >
                {currencies
                  .filter(
                    (currency) =>
                      currency.balance! >= 5 &&
                      currency.symbol !== swapData.toSymbol
                  )
                  .map((currency) => (
                    <option key={currency.symbol} value={currency.symbol}>
                      {currency.symbol} (balance: {currency.balance!.toFixed(2)}{" "}
                      {currency.symbol})
                    </option>
                  ))}
              </StyledSelect>
              <>
                <StyledInput
                  type="number"
                  step="0.01"
                  placeholder="Enter amount"
                  value={swapData.fromAmount}
                  min={String(minMaxInputAmounts.fromMin)}
                  max={String(minMaxInputAmounts.fromMax)}
                  {...register(`${ESwapKey.fromAmount}`, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  onKeyDown={(e) => PreventDotInInput(e)}
                  onFocus={() =>
                    setMinMaxInputAmounts({
                      fromMin: 1,
                      fromMax: Number(
                        getCurrencyBalance(swapData.fromSymbol).toFixed(2)
                      ),
                      toMin: null,
                      toMax: null,
                    })
                  }
                  onChange={(e) =>
                    handleSwapData(ESwapKey.fromAmount, Number(e.target.value))
                  }
                />
                {errors.fromAmount?.type === "required" && <FieldError />}
              </>
              <p>
                Balance after:{" "}
                {getBalanceAfter(swapData.fromSymbol, EDirection.from)}{" "}
                {swapData.fromSymbol}
              </p>
            </StyledSwapCurrency>
          </>
          <StyledColumm>
            <SwapArrows
              canBeReversed={getCurrencyBalance(swapData.toSymbol) >= 5}
              reverseSwap={reverseSwap}
            />
            <StyledButton
              ref={swapBtn}
              type="submit"
              disabled={swapData.fromAmount <= 0}
              style={{
                cursor: swapData.fromAmount <= 0 ? "not-allowed" : "pointer",
              }}
            >
              <i className="fas fa-check"></i>Submit
            </StyledButton>
          </StyledColumm>
          <>
            <StyledSwapCurrency>
              <StyledHeading>To</StyledHeading>
              <StyledSelect
                value={swapData.toSymbol}
                {...register(`${ESwapKey.toSymbol}`, {
                  required: true,
                })}
                onChange={(e) =>
                  handleSwapData(
                    ESwapKey.toSymbol,
                    e.target.value as ECurrencySymbol
                  )
                }
              >
                {currencies
                  .filter((currency) => currency.symbol !== swapData.fromSymbol)
                  .map((currency) => (
                    <option key={currency.symbol} value={currency.symbol}>
                      {currency.symbol} (balance: {currency.balance!.toFixed(2)}{" "}
                      {currency.symbol})
                    </option>
                  ))}
              </StyledSelect>
              <>
                <StyledInput
                  type="number"
                  step="0.01"
                  placeholder="Enter amount"
                  value={swapData.toAmount}
                  min={String(minMaxInputAmounts.toMin)}
                  max={String(minMaxInputAmounts.toMax)}
                  {...register(`${ESwapKey.toAmount}`, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  onKeyDown={(e) => PreventDotInInput(e)}
                  onFocus={() =>
                    setMinMaxInputAmounts({
                      fromMin: null,
                      fromMax: null,
                      toMin: 1,
                      toMax: Number(
                        getCurrencyBalance(swapData.toSymbol).toFixed(2)
                      ),
                    })
                  }
                  onChange={(e) =>
                    handleSwapData(ESwapKey.toAmount, Number(e.target.value))
                  }
                />
                {errors.toAmount?.type === "required" && <FieldError />}
              </>
              <p>
                Balance after:{" "}
                {getBalanceAfter(swapData.toSymbol, EDirection.to)}{" "}
                {swapData.toSymbol}
              </p>
            </StyledSwapCurrency>
          </>
        </StyledForm>
      ) : (
        <p>You do not have enough currency to swap.</p>
      )}
    </StyledTile>
  );
};

export default Swap;

const StyledSwap = styled.div`
  margin-bottom: 60px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: unset;
    align-items: center;
  }
`;

const StyledColumm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 40px;
  }
`;

const StyledSwapCurrency = styled.div`
  input,
  select {
    margin-bottom: 12px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-grow: 1;
  }
`;
