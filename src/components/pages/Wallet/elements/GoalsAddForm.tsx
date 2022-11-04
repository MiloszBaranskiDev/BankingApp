import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addWalletGoal } from "redux/slices/WalletSlice";
import { Dispatch } from "@reduxjs/toolkit";

import GetRandomId from "utils/GeRandomId";

import { EGoalField } from "enums/EGoalField";
import { IGoal } from "interfaces/IGoal";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

import FieldError from "components/FieldError";
import StyledLabel from "components/styled/StyledLabel";
import StyledSelect from "components/styled/StyledSelect";
import StyledInput from "components/styled/StyledInput";
import StyledButton from "components/styled/StyledButton";

interface IProps {
  currenciesSymbols: ECurrencySymbol[];
}

const GoalsAddForm: React.FC<IProps> = ({ currenciesSymbols }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IGoal>();

  const dispatch: Dispatch = useDispatch();

  const handleGoalSubmit: SubmitHandler<IGoal> = (goalData) => {
    goalData.currentAmount = 0;
    goalData.id = GetRandomId();
    dispatch(addWalletGoal(goalData));
    reset();
  };

  return (
    <StyledGoalsForm onSubmit={handleSubmit(handleGoalSubmit)}>
      <>
        <StyledLabel htmlFor={EGoalField.title + "-add"}>Title</StyledLabel>
        <StyledInput
          id={EGoalField.title + "-add"}
          minLength={2}
          maxLength={60}
          {...register("title", {
            required: true,
          })}
        />
        {errors.title?.type === "required" && <FieldError />}
      </>
      <>
        <StyledLabel htmlFor={EGoalField.currencySymbol + "-add"}>
          Currency
        </StyledLabel>
        <StyledSelect
          id={EGoalField.currencySymbol + "-add"}
          defaultValue={currenciesSymbols[0]}
          {...register("currencySymbol", {
            required: true,
          })}
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
        <StyledLabel htmlFor={EGoalField.targetAmount + "-add"}>
          Target amount
        </StyledLabel>
        <StyledInput
          id={EGoalField.targetAmount + "-add"}
          type="number"
          min={50}
          max={10000000}
          {...register("targetAmount", {
            valueAsNumber: true,
            required: true,
          })}
        />
        {errors.targetAmount?.type === "required" && <FieldError />}
      </>
      <StyledButtons>
        <StyledButton as="button" type="submit">
          <i className="fas fa-check"></i>Save
        </StyledButton>
      </StyledButtons>
    </StyledGoalsForm>
  );
};

export default GoalsAddForm;

const StyledGoalsForm = styled.form`
  margin-bottom: 14px;
  input,
  select {
    margin-bottom: 12px;
  }
`;

const StyledButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
