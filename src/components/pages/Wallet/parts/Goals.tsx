import { useState } from "react";
import styled from "styled-components";

import StyledHeading from "components/styled/StyledHeading";
import StyledButton from "components/styled/StyledButton";
import GoalsItem from "../elements/GoalsItem";
import GoalsForm from "../elements/GoalsForm";

const Goals: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <StyledGoals>
      <StyledRow>
        <StyledHeading>Goals</StyledHeading>
        <StyledButton as="button" onClick={() => setShowForm(!showForm)}>
          {!showForm ? "Add" : "Close"}
        </StyledButton>
      </StyledRow>
      {showForm && <GoalsForm />}
      <ul>
        <GoalsItem />
      </ul>
    </StyledGoals>
  );
};

export default Goals;

const StyledGoals = styled.div`
  margin-top: 16px;
  flex-basis: 100%;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  button {
    margin-left: auto;
    padding-left: 16px;
  }
`;
