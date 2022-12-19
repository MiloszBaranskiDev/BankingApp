import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { updateWalletGoal } from "redux/slices/WalletSlice";
import { useState, useEffect } from "react";

import StyledHeading from "components/styled/StyledHeading";
import StyledButton from "components/styled/StyledButton";
import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";
import StyledSelect from "components/styled/StyledSelect";
import FieldError from "components/FieldError";

import PreventDotInInput from "helpers/PreventDotInInput";

import { EGoalKey } from "enums/EGoalKey";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { EGoalField } from "enums/EGoalField";
import { IGoal } from "interfaces/IGoal";
import { EGoalFormAction } from "enums/EGoalFormAction";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

interface IProps {
  goal: IGoal;
  currenciesRates: ICurrencyRate[];
  currenciesSymbols: ECurrencySymbol[];
  currentFormAction: EGoalFormAction;
  setShowForm: (arg0: boolean) => void;
}

const GoalEditForm: React.FC<IProps> = ({
  goal,
  currenciesRates,
  currenciesSymbols,
  currentFormAction,
  setShowForm,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<IGoal>();

  const dispatch: Dispatch = useDispatch();

  const [currentCurrencySymbol, setCurrentCurrencySymbol] =
    useState<ECurrencySymbol>(goal.currencySymbol);
  const [currentTargetAmount, setCurrentTargetAmount] = useState<number>(
    goal.targetAmount
  );

  const findRate = (currencySymbol: ECurrencySymbol): number => {
    return currenciesRates.find((rate) => rate.symbol === currencySymbol)
      ?.price!;
  };

  const convertAmount = (prevAmount: number): number => {
    if (goal.currencySymbol !== currentCurrencySymbol) {
      let multiplier: number;

      if (goal.currencySymbol === ECurrencySymbol.pln) {
        multiplier = 1 / findRate(currentCurrencySymbol);
      } else if (currentCurrencySymbol === ECurrencySymbol.pln) {
        multiplier = findRate(goal.currencySymbol);
      } else {
        multiplier =
          findRate(goal.currencySymbol) / findRate(currentCurrencySymbol);
      }

      return Number((prevAmount * multiplier).toFixed());
    } else {
      return prevAmount;
    }
  };

  const handleGoalEdit: SubmitHandler<IGoal> = (formData) => {
    const updatedGoal: IGoal = {
      ...formData,
      [EGoalKey.currentAmount]: goal.currentAmount,
      [EGoalKey.id]: goal.id,
    };

    if (goal.currencySymbol !== formData.currencySymbol) {
      updatedGoal[EGoalKey.currentAmount] = convertAmount(
        updatedGoal[EGoalKey.currentAmount]
      );

      updatedGoal[EGoalKey.targetAmount] = formData.targetAmount;
    }

    if (JSON.stringify(goal) !== JSON.stringify(updatedGoal)) {
      dispatch(updateWalletGoal(updatedGoal));
    }

    setShowForm(false);
    reset();
  };

  useEffect(() => {
    setCurrentTargetAmount(convertAmount(goal.targetAmount));
    // eslint-disable-next-line
  }, [currentCurrencySymbol]);

  useEffect(() => {
    setValue(EGoalKey.targetAmount, currentTargetAmount);
    // eslint-disable-next-line
  }, [currentTargetAmount]);

  return (
    <form onSubmit={handleSubmit(handleGoalEdit)}>
      <StyledHeading as="h3">{currentFormAction}</StyledHeading>
      <>
        <StyledLabel htmlFor={EGoalField.title + "-edit"}>Title</StyledLabel>
        <StyledInput
          id={EGoalField.title + "-edit"}
          defaultValue={goal.title}
          minLength={2}
          maxLength={60}
          {...register(`${EGoalKey.title}`, {
            required: true,
          })}
        />
        {errors.title?.type === "required" && <FieldError />}
      </>
      <>
        <StyledLabel htmlFor={EGoalField.currencySymbol + "-edit"}>
          Currency
        </StyledLabel>
        <StyledSelect
          id={EGoalField.currencySymbol + "-edit"}
          defaultValue={goal.currencySymbol}
          {...register(`${EGoalKey.currencySymbol}`, {
            required: true,
          })}
          onChange={(e) =>
            setCurrentCurrencySymbol(e.target.value as ECurrencySymbol)
          }
        >
          {currenciesSymbols.map((currencySymbol) => (
            <option key={currencySymbol} value={currencySymbol}>
              {currencySymbol}
            </option>
          ))}
        </StyledSelect>
        {errors.currencySymbol?.type === "required" && <FieldError />}
      </>
      <>
        <StyledLabel htmlFor={EGoalField.targetAmount + "-edit"}>
          Target amount
        </StyledLabel>
        <StyledInput
          id={EGoalField.targetAmount + "-edit"}
          type="number"
          step="0.01"
          value={currentTargetAmount}
          min={50}
          max={10000000}
          {...register(`${EGoalKey.targetAmount}`, {
            valueAsNumber: true,
            required: true,
          })}
          onKeyDown={(e) => PreventDotInInput(e)}
          onChange={(e) => setCurrentTargetAmount(Number(e.target.value))}
        />
        {errors.targetAmount?.type === "required" && <FieldError />}
      </>
      <>
        <StyledButton type="submit">
          <i className="fas fa-check"></i>Confirm
        </StyledButton>
        <StyledButton onClick={() => setShowForm(false)}>
          <i className="fas fa-times"></i>Close
        </StyledButton>
      </>
    </form>
  );
};

export default GoalEditForm;
