import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ITransaction } from "interfaces/ITransaction";

import SummaryDetails from "../elements/SummaryDetails";
import SummaryBtns from "../elements/SummaryBtns";

interface Props {
  setShowSummary: (arg0: boolean) => void;
}

const Summary: React.FC<Props> = ({ setShowSummary }) => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  const transaction = [...transactions]
    .reverse()
    .find(
      (transaction) =>
        transaction.category.toLowerCase() === "outgoing transfer"
    );

  return (
    <StyledSummary>
      <SummaryDetails transaction={transaction!} />
      <SummaryBtns setShowSummary={setShowSummary} />
    </StyledSummary>
  );
};

export default Summary;

const StyledSummary = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 600px;
  }
  a {
    margin-bottom: 8px;
  }
`;
