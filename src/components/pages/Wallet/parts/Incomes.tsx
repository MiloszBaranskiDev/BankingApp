import styled from "styled-components";

import TotalIncomes from "../elements/TotalIncomes";
import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";

const Incomes: React.FC = () => {
  return (
    <StyledTile as={StyledIncomes}>
      <StyledHeading>Incomes</StyledHeading>
      <TotalIncomes />
    </StyledTile>
  );
};

export default Incomes;

const StyledIncomes = styled.div`
  flex-basis: 100%;
  margin: 16px 0;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 0;
  }
`;
