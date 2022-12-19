import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { updateWalletCurrencies } from "redux/slices/WalletSlice";
import { removeWalletGoal } from "redux/slices/WalletSlice";
import { addTransaction } from "redux/slices/TransactionsSlice";

import GoalEditForm from "./GoalEditForm";
import GoalTransferForm from "./GoalTransferForm";
import StyledButton from "components/styled/StyledButton";
import CircularBar from "components/CircularBar";

import GetRandomId from "utils/GeRandomId";
import GetTodayDate from "utils/GetTodayDate";
import GetCollectedPercentage from "utils/GetCollectedPercentage";

import { ETransationType } from "enums/ETransactionType";
import { ETransactionCategory } from "enums/ETransactionCategory";
import { EGoalFormAction } from "enums/EGoalFormAction";
import { IGoal } from "interfaces/IGoal";
import { ICurrency } from "interfaces/ICurrency";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

interface IProps {
  goal: IGoal;
  currencies: ICurrency[];
  currenciesRates: ICurrencyRate[];
}

const GoalItem: React.FC<IProps> = ({ goal, currencies, currenciesRates }) => {
  const dispatch: Dispatch = useDispatch();

  const collectedPercentage: number = GetCollectedPercentage(
    goal.currentAmount,
    goal.targetAmount
  );

  const currencyBalance: number = currencies.find(
    (currency) => currency.symbol === goal.currencySymbol
  )?.balance!;

  const [showForm, setShowForm] = useState<boolean>(false);
  const [currentFormAction, setCurrentFormAction] = useState<EGoalFormAction>();

  const showFormWithAction = (action: EGoalFormAction) => {
    setShowForm(true);
    setCurrentFormAction(action);
  };

  const handleRemove = (): void => {
    if (goal.currentAmount > 0) {
      dispatch(
        updateWalletCurrencies({
          symbol: goal.currencySymbol,
          balance: currencyBalance + goal.currentAmount,
        })
      );

      dispatch(
        addTransaction({
          type: ETransationType.income,
          category: ETransactionCategory.goalCancel,
          currencySymbol: goal.currencySymbol,
          amount: goal.currentAmount,
          id: GetRandomId(),
          date: GetTodayDate(),
          details: {
            title: goal.title,
            returned: goal.currentAmount + " " + goal.currencySymbol,
          },
        })
      );
    }

    dispatch(removeWalletGoal({ id: goal.id }));
  };

  return (
    <StyledAccordionContent>
      <p>
        <span>Title:</span>
        {goal.title}
      </p>
      <p>
        <span>Balance:</span>
        <span style={{ wordBreak: "break-all" }}>{goal.currentAmount}</span>
        &nbsp;
        {goal.currencySymbol}
      </p>
      <p>
        <span>Target:</span>
        <span style={{ wordBreak: "break-all" }}>{goal.targetAmount}</span>
        &nbsp;
        {goal.currencySymbol}
      </p>
      <CircularBar
        text={
          collectedPercentage < 100 ? collectedPercentage.toFixed(2) + "%" : "✓"
        }
        value={collectedPercentage}
        completed={collectedPercentage >= 100}
      />
      {showForm && (
        <>
          {currentFormAction === EGoalFormAction.edit ? (
            <GoalEditForm
              goal={goal}
              currenciesRates={currenciesRates}
              currenciesSymbols={currencies.map((currency) => currency.symbol)}
              currentFormAction={currentFormAction}
              setShowForm={setShowForm}
            ></GoalEditForm>
          ) : (
            <GoalTransferForm
              goal={goal}
              currencyBalance={currencyBalance}
              currentFormAction={currentFormAction!}
              setShowForm={setShowForm}
            />
          )}
        </>
      )}
      <StyledButtons>
        <StyledButton
          disabled={currencyBalance < 1}
          style={{ cursor: currencyBalance < 1 ? "not-allowed" : "pointer" }}
          onClick={() => showFormWithAction(EGoalFormAction.deposit)}
        >
          <i className="fas fa-hand-holding-usd"></i>
        </StyledButton>
        <StyledButton
          disabled={goal.currentAmount < 1}
          style={{ cursor: goal.currentAmount < 1 ? "not-allowed" : "pointer" }}
          onClick={() => showFormWithAction(EGoalFormAction.withdraw)}
        >
          <i className="fas fa-arrow-down"></i>
        </StyledButton>
        <StyledButton onClick={() => showFormWithAction(EGoalFormAction.edit)}>
          <i className="fas fa-edit"></i>
        </StyledButton>
        <StyledButton onClick={handleRemove}>
          <i className="fas fa-trash"></i>
        </StyledButton>
      </StyledButtons>
    </StyledAccordionContent>
  );
};

export default GoalItem;

const StyledAccordionContent = styled.div`
  .CircularProgressbar {
    margin: 16px 0;
  }
  p {
    line-height: 26px;
    span {
      &:first-child {
        margin-right: 6px;
        font-weight: ${(props) => props.theme.typography.weight_bold};
      }
    }
  }
  form {
    margin-bottom: 20px;
    h3 {
      text-transform: capitalize;
      margin-bottom: 12px;
    }
    label {
      text-transform: unset;
    }
    input,
    select {
      margin-bottom: 12px;
    }
    button {
      margin: 0 10px 10px 0;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 10px 0;
    width: 50px;
    height: 50px;
    i {
      margin: 0;
      font-size: ${(props) => props.theme.typography.size_big};
    }
  }
`;
