import styled from "styled-components";
import { NavLink } from "react-router-dom";
import S_Button from "elements/layout/S_Button";

interface Props {
  setShowSummary: (arg0: boolean) => void;
}

const S_SummaryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    flex-basis: 49%;
  }
`;

const SummaryBtns: React.FC<Props> = ({ setShowSummary }) => {
  return (
    <S_SummaryBtns>
      <S_Button onClick={() => setShowSummary(false)}>New transfer</S_Button>
      <S_Button as={NavLink} to="/transactions">
        Transactions
      </S_Button>
    </S_SummaryBtns>
  );
};

export default SummaryBtns;
