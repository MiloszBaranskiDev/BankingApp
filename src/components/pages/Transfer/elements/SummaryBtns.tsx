import styled from "styled-components";
import { NavLink } from "react-router-dom";

import StyledButton from "components/styled/StyledButton";

interface IProps {
  setShowSummary: (arg0: boolean) => void;
}

const SummaryBtns: React.FC<IProps> = ({ setShowSummary }) => {
  return (
    <StyledSummaryBtns>
      <StyledButton onClick={() => setShowSummary(false)}>
        New transfer
      </StyledButton>
      <StyledButton as={NavLink} to="/transactions">
        Transactions
      </StyledButton>
    </StyledSummaryBtns>
  );
};

export default SummaryBtns;

const StyledSummaryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    flex-basis: 49%;
  }
`;
