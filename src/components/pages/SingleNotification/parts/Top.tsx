import styled from "styled-components";
import StyledPageTitle from "components/layout/StyledPageTitle";
import Remove from "../elements/Remove";
import Date from "../elements/Date";

const Top: React.FC = () => {
  return (
    <StyledTop>
      <StyledPageTitle>Single notification</StyledPageTitle>
      <Remove />
      <Date />
    </StyledTop>
  );
};

export default Top;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 60px 0;
  h1 {
    flex-basis: 100%;
    padding: 0;
    margin-bottom: 12px;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      flex-basis: auto;
      margin-bottom: 0;
      margin-right: auto;
      padding-right: 30px;
    }
  }
`;
