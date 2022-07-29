import styled from "styled-components";

import StyledHeading from "components/styled/StyledHeading";

const Incomes: React.FC = () => {
  return (
    <StyledIncomes>
      <StyledHeading>Incomes</StyledHeading>
    </StyledIncomes>
  );
};

export default Incomes;

const StyledIncomes = styled.div`
  flex-basis: 100%;
  margin: 16px 0;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 0;
  }
`;
