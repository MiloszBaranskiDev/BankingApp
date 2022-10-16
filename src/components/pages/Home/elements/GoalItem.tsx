import styled from "styled-components";

import { IGoal } from "interfaces/IGoal";

import GetCollectedPercentage from "utils/GetCollectedPercentage";

import CircularBar from "components/CircularBar";

interface IProps {
  goal: IGoal;
}

const GoalItem: React.FC<IProps> = ({ goal }) => {
  return (
    <StyledGoalItem>
      <CircularBar
        text={
          GetCollectedPercentage(goal.currentAmount, goal.targetAmount).toFixed(
            2
          ) + "%"
        }
        value={GetCollectedPercentage(goal.currentAmount, goal.targetAmount)}
      />
      <p>{goal.title}</p>
      <span className="horizontalDivider">|</span>
      <p>
        {goal.currentAmount} / {goal.targetAmount} {goal.currencySymbol}
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
