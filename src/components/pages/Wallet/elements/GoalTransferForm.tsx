import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  updateWalletGoal,
  updateWalletCurrencies,
} from "redux/slices/WalletSlice";
import { addTransaction } from "redux/slices/TransactionsSlice";

import GetRandomId from "utils/GeRandomId";
import GetTodayDate from "utils/GetTodayDate";

import PreventDotInInput from "helpers/PreventDotInInput";

import FieldError from "components/FieldError";
import StyledHeading from "components/styled/StyledHeading";
import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";
import StyledButton from "components/styled/StyledButton";

import { ETransationType } from "enums/ETransactionType";
import { ETransactionCategory } from "enums/ETransactionCategory";
import { IGoal } from "interfaces/IGoal";
import { EGoalFormAction } from "enums/EGoalFormAction";

interface IProps {
  goal: IGoal;
  currencyBalance: number;
  currentFormAction: EGoalFormAction;
  setShowForm: (arg0: boolean) => void;
}

interface IGoalTransfer {
  amount: number;
}

const GoalTransferForm: React.FC<IProps> = ({
  goal,
  currencyBalance,
  currentFormAction,
  setShowForm,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IGoalTransfer>();

  const dispatch: Dispatch = useDispatch();

  const calculateMaxInputAmount = (): number => {
    let maxInputAmount: number;

    if (currentFormAction === EGoalFormAction.withdraw) {
      maxInputAmount = goal.currentAmount;
    } else {
      const diff: number = goal.targetAmount - goal.currentAmount;
      maxInputAmount = diff >= currencyBalance ? currencyBalance : diff;
    }

    return maxInputAmount;
  };

  const handleGoalTransfer: SubmitHandler<IGoalTransfer> = (formData) => {
    const amount: number = formData.amount;

    const updatedGoalBalance: number =
      currentFormAction === EGoalFormAction.deposit
        ? goal.currentAmount + amount
        : goal.currentAmount - amount;

    const updatedCurrencyBalance: number =
      currentFormAction === EGoalFormAction.deposit
        ? currencyBalance - amount
        : currencyBalance + amount;

    const updatedGoal: IGoal = { ...goal };
    updatedGoal.currentAmount = updatedGoalBalance;

    dispatch(updateWalletGoal(updatedGoal));
    dispatch(
      updateWalletCurrencies({
        symbol: updatedGoal.currencySymbol,
        balance: updatedCurrencyBalance,
      })
    );
    dispatch(
      addTransaction({
        type:
          currentFormAction === EGoalFormAction.deposit
            ? ETransationType.outcome
            : ETransationType.income,
        category:
          currentFormAction === EGoalFormAction.deposit
            ? ETransactionCategory.goalDeposit
            : ETransactionCategory.goalWithdraw,
        currencySymbol: goal.currencySymbol,
        amount: amount,
        id: GetRandomId(),
        date: GetTodayDate(),
        details: {
          title: goal.title,
          [`${
            currentFormAction === EGoalFormAction.deposit
              ? "deposited"
              : "withdrawn"
          }`]: amount + " " + goal.currencySymbol,
        },
      })
    );

    setShowForm(false);
    reset();
  };

  useEffect(() => {
    reset();
  }, [currentFormAction]);

  return (
    <form onSubmit={handleSubmit(handleGoalTransfer)}>
      <StyledHeading as="h3">{currentFormAction}</StyledHeading>
      <>
        <StyledLabel htmlFor={"goal-item-" + currentFormAction + "-amount"}>
          Amount (wallet balance: {currencyBalance} {goal.currencySymbol})
        </StyledLabel>
        <StyledInput
          id={"goal-item-" + currentFormAction + "-amount"}
          type="number"
          step="0.01"
          min={1}
          max={calculateMaxInputAmount()}
          {...register("amount", {
            valueAsNumber: true,
            required: true,
          })}
          onKeyDown={(e) => PreventDotInInput(e)}
        />
        {errors.amount?.type === "required" && <FieldError />}
      </>
      <StyledButton type="submit">
        <i className="fas fa-check"></i>Confirm
      </StyledButton>
      <StyledButton onClick={() => setShowForm(false)}>
        <i className="fas fa-times"></i>Close
      </StyledButton>
    </form>
  );
};

export default GoalTransferForm;
