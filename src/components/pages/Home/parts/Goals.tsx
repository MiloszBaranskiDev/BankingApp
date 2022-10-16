import styled from "styled-components";
import { Link } from "react-router-dom";

import StyledButton from "components/styled/StyledButton";
import StyledHeading from "components/styled/StyledHeading";
import GoalItem from "../elements/GoalItem";

import { IGoal } from "interfaces/IGoal";

interface IProps {
  goals: IGoal[];
}

const Goals: React.FC<IProps> = ({ goals }) => {
  return (
    <StyledGoals>
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
        <StyledButton as={Link} to="/wallet">
          See more
        </StyledButton>
      </StyledButtonContainer>
    </StyledGoals>
  );
};

export default Goals;

const StyledGoals = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
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
