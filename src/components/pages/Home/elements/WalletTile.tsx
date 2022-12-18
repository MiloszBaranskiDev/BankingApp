import styled from "styled-components";

import { ETransationType } from "enums/ETransactionType";

import StyledTotalAmount from "components/styled/StyledTotalAmount";
import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";

interface IProps {
  heading: string;
  transactionType: ETransationType;
  amount: number;
}

const WalletTile: React.FC<IProps> = ({ heading, transactionType, amount }) => {
  return (
    <StyledTile as={StyledWalletTile}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledTotalAmount
        amount={amount}
        defaultStyle={transactionType === null ? true : false}
      >
        <span>~{amount}</span>
        PLN
      </StyledTotalAmount>
      <p>* Converted into PLN</p>
    </StyledTile>
  );
};

export default WalletTile;

const StyledWalletTile = styled.div`
  flex-basis: 100%;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  p:last-child {
    font-size: ${(props) => props.theme.typography.size_small};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: calc(33.33% - 8px);
    margin-bottom: 0;
  }
`;
