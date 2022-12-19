import { useState, useEffect } from "react";
import styled from "styled-components";

import { IGoal } from "interfaces/IGoal";
import { ICurrency } from "interfaces/ICurrency";

import Accordion from "components/Accordion";
import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";
import StyledButton from "components/styled/StyledButton";
import GoalItem from "../elements/GoalItem";
import GoalsAddForm from "../elements/GoalsAddForm";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

interface IProps {
  goals: IGoal[];
  currencies: ICurrency[];
  currenciesRates: ICurrencyRate[];
}

const Goals: React.FC<IProps> = ({ goals, currencies, currenciesRates }) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    showForm && setShowForm(!showForm);
  }, [goals.length]);

  return (
    <StyledTile as={StyledGoals}>
      <StyledRow>
        <StyledHeading>Goals</StyledHeading>
        <StyledButton onClick={() => setShowForm(!showForm)}>
          {!showForm ? (
            <>
              <i className="fas fa-plus"></i>
              <span>Add</span>
            </>
          ) : (
            <>
              <i className="fas fa-times"></i>
              <span>Close</span>
            </>
          )}
        </StyledButton>
      </StyledRow>
      {showForm && (
        <GoalsAddForm
          currenciesSymbols={currencies.map((currency) => currency.symbol)}
        />
      )}
      {goals.length > 0 ? (
        <ul>
          {goals
            .slice(0)
            .reverse()
            .map((goal) => (
              <Accordion
                key={goal.id}
                top={goal.title}
                content={
                  <GoalItem
                    goal={goal}
                    currencies={currencies}
                    currenciesRates={currenciesRates}
                  />
                }
              />
            ))}
        </ul>
      ) : (
        <p>
          {" "}
          You don't have any goals yet, use button if you want to add them.
        </p>
      )}
    </StyledTile>
  );
};

export default Goals;

const StyledGoals = styled.div`
  margin-top: 16px;
  flex-basis: 100%;
  ul {
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        margin-bottom: 20px;
        margin-top: 0 !important;
        flex-basis: 49.3%;
      }
    }
  }
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
