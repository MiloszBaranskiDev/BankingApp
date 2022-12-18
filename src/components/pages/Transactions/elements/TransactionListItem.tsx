import styled from "styled-components";

import Accordion from "components/Accordion";

import { ITransaction } from "interfaces/ITransaction";

interface IProps {
  transaction: ITransaction;
}

const AccordionContent: React.FC<IProps> = ({ transaction }) => {
  return (
    <StyledAccordionContent>
      {Object.entries(transaction.details).map(([key, value]) => (
        <li key={key}>
          <p>
            <span>{key.split("_")[0]}</span>
            <span>{value}</span>
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
      text-transform: capitalize;
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
