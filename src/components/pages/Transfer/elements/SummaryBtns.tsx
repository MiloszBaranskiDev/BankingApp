import styled from "styled-components";
import { NavLink } from "react-router-dom";

import StyledButton from "components/styled/StyledButton";

import { ERoute } from "enums/ERoute";

interface IProps {
  setShowSummary: (arg0: boolean) => void;
}

const SummaryBtns: React.FC<IProps> = ({ setShowSummary }) => {
  return (
    <StyledSummaryBtns>
      <StyledButton onClick={() => setShowSummary(false)}>
        <i className="fas fa-paper-plane"></i>New transfer
      </StyledButton>
      <StyledButton as={NavLink} to={ERoute.transactions}>
        <i className="fas fa-hand-holding-usd"></i>Transactions
      </StyledButton>
    </StyledSummaryBtns>
  );
};

export default SummaryBtns;

const StyledSummaryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  button,
  a {
    flex-basis: 49%;
    margin-bottom: 8px;
  }
`;
