import styled from "styled-components";
import { Link } from "react-router-dom";

import StyledTile from "components/styled/StyledTile";
import StyledButton from "components/styled/StyledButton";
import StyledHeading from "components/styled/StyledHeading";
import GoalItem from "../elements/GoalItem";

import { ERoute } from "enums/ERoute";
import { IGoal } from "interfaces/IGoal";

interface IProps {
  goals: IGoal[];
}

const Goals: React.FC<IProps> = ({ goals }) => {
  return (
    <StyledTile as={StyledGoals}>
      {goals.length > 0 ? (
        <>
          <StyledHeading>Last goals</StyledHeading>
          <ul>
            {goals
              .slice(-2)
              .reverse()
              .map((goal) => (
                <li key={goal.id}>
                  <GoalItem key={goal.id} goal={goal} />
                </li>
              ))}
          </ul>
          <StyledButtonContainer>
            <StyledButton as={Link} to={ERoute.wallet}>
              <i className="fas fa-search"></i>See more
            </StyledButton>
          </StyledButtonContainer>
        </>
      ) : (
        <p>You don't have any goals yet.</p>
      )}
    </StyledTile>
  );
};

export default Goals;

const StyledGoals = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
    flex-basis: calc(50% - 8px);
  }
  ul {
    margin-top: 20px;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: auto;
`;
