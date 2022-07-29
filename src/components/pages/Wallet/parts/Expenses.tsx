import styled from "styled-components";

import StyledHeading from "components/styled/StyledHeading";

const Expenses: React.FC = () => {
  return (
    <StyledExpenses>
      <StyledHeading>Expenses</StyledHeading>
    </StyledExpenses>
  );
};

export default Expenses;

const StyledExpenses = styled.div`
  flex-basis: 100%;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
`;
