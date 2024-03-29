import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { ETransactionCategory } from "enums/ETransactionCategory";
import { ITransaction } from "interfaces/ITransaction";

import StyledTile from "components/styled/StyledTile";
import SummaryDetails from "../elements/SummaryDetails";
import SummaryBtns from "../elements/SummaryBtns";

interface IProps {
  setShowSummary: (arg0: boolean) => void;
}

const Summary: React.FC<IProps> = ({ setShowSummary }) => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  const transaction: ITransaction | undefined = [...transactions]
    .reverse()
    .find(
      (transaction) =>
        transaction.category === ETransactionCategory.outgoingTransfer
    );

  return (
    <StyledTile as={StyledSummary}>
      <SummaryDetails transaction={transaction!} />
      <SummaryBtns setShowSummary={setShowSummary} />
    </StyledTile>
  );
};

export default Summary;

const StyledSummary = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 600px;
  }
`;
