import styled from "styled-components";
import S_PageTitle from "components/layout/S_PageTitle";
import Remove from "../elements/Remove";
import Date from "../elements/Date";

const S_Top = styled.div`
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

const Top: React.FC = () => {
  return (
    <S_Top>
      <S_PageTitle>Single notification</S_PageTitle>
      <Remove />
      <Date />
    </S_Top>
  );
};

export default Top;
