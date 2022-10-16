import styled from "styled-components";

import Accordion from "components/Accordion";

import { ITransaction } from "interfaces/ITransaction";

interface IProps {
  transaction: ITransaction;
}

const AccordionContent: React.FC<IProps> = ({ transaction }) => {
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

const TransactionListItem: React.FC<IProps> = ({ transaction }) => {
  return (
    <>
      <Accordion
        key={transaction.id}
        top={transaction.category + " / " + transaction.date}
        content={<AccordionContent transaction={transaction} />}
      />
    </>
  );
};

export default TransactionListItem;

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
