import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ITransaction } from "interfaces/ITransaction";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Accordion from "components/Accordion";

interface IAccordionContent {
  transaction: ITransaction;
}

const AccordionContent: React.FC<IAccordionContent> = ({ transaction }) => {
  return (
    <StyledAccordionContent>
      {transaction.details.map((detail) => (
        <li key={Object.values(detail)[0]}>
          <p>
            {Object.entries(detail).map(([key, value]) => (
              <span key={key}>{value}</span>
            ))}
          </p>
        </li>
      ))}
    </StyledAccordionContent>
  );
};

const Transactions: React.FC = () => {
  const transactions: ITransaction[] = useSelector(
    (state: RootState) => state.transactions
  );

  return (
    <>
      <StyledPageTitle>Transactions</StyledPageTitle>
      {transactions.length > 0 && (
        <ul>
          {transactions
            .slice(0)
            .reverse()
            .map((transaction) => (
              <Accordion
                key={transaction.id}
                top={transaction.category + " / " + transaction.date}
                content={<AccordionContent transaction={transaction} />}
              />
            ))}
        </ul>
      )}
    </>
  );
};

export default Transactions;

const StyledAccordionContent = styled.ul`
  li {
    line-height: 26px;
    span:first-child {
      margin-right: 12px;
      position: relative;
      font-weight: ${(props) => props.theme.typography.weight_bold};
      &::after {
        content: ":";
        position: absolute;
        right: -5px;
      }
    }
  }
`;
