import styled from "styled-components";

import { IGoal } from "interfaces/IGoal";

import GetCollectedPercentage from "utils/GetCollectedPercentage";

import CircularBar from "components/CircularBar";

interface IProps {
  goal: IGoal;
}

const GoalItem: React.FC<IProps> = ({ goal }) => {
  const collectedPercentage: number = GetCollectedPercentage(
    goal.currentAmount,
    goal.targetAmount
  );

  return (
    <StyledGoalItem>
      <CircularBar
        text={
          collectedPercentage < 100 ? collectedPercentage.toFixed(2) + "%" : "✓"
        }
        value={collectedPercentage}
        completed={collectedPercentage >= 100}
      />
      <p>{goal.title}</p>
      <span className="horizontalDivider">|</span>
      <p>
        <span style={{ wordBreak: "break-all" }}>
          {goal.currentAmount} / {goal.targetAmount}
        </span>
        &nbsp;
        {goal.currencySymbol}
      </p>
    </StyledGoalItem>
  );
};

export default GoalItem;

const StyledGoalItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  .horizontalDivider {
    margin: 0 12px;
  }
`;
