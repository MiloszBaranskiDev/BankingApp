import styled from "styled-components";

import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";

const Expenses: React.FC = () => {
  return (
    <StyledTile as={StyledExpenses}>
      <StyledHeading>Expenses</StyledHeading>
    </StyledTile>
  );
};

export default Expenses;

const StyledExpenses = styled.div`
  flex-basis: 100%;
`;
