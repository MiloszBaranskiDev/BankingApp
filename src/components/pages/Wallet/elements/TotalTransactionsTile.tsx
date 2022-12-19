import styled from "styled-components";

import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";
import StyledTotalAmount from "components/styled/StyledTotalAmount";

import { ETransationType } from "enums/ETransactionType";

interface IProps {
  transactionType: ETransationType;
  heading: string;
  amount: number;
}

const TotalTransactionsTile: React.FC<IProps> = ({
  transactionType,
  heading,
  amount,
}) => {
  return (
    <StyledTotalTransactionTile as={StyledTile}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledTotalAmount
        amount={amount}
        defaultStyle={transactionType === null ? true : false}
      >
        <span>~{amount}</span>
        PLN
      </StyledTotalAmount>
      <p>* Converted into PLN</p>
    </StyledTotalTransactionTile>
  );
};

export default TotalTransactionsTile;

const StyledTotalTransactionTile = styled.div`
  flex-basis: 100%;
  &:first-child {
    margin: 16px 0;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      margin-top: 0 !important;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-top: 16px;
    margin-bottom: 0 !important;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: 100%;
  }
`;
