import { useState } from "react";
import styled from "styled-components";
import Question from "elements/Faq/Question";
import Answer from "elements/Faq/Answer";

const StyledAccordionItem = styled.li`
  margin-bottom: 20px;
  border: 1px solid transparent;
  transition: border 0.3s;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  &:hover {
    border-color: ${(props) => props.theme.colors.main};
  }
  &:first-child {
    margin-top: 50px;
  }
`;

const AccordionItem: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledAccordionItem>
      <Question open={open} setOpen={setOpen} />
      <Answer className={open ? "show-answer" : ""} />
    </StyledAccordionItem>
  );
};

export default AccordionItem;
