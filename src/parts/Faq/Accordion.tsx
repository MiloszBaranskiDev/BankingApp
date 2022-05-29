import { useState } from "react";
import styled from "styled-components";
import Question from "elements/Faq/Question";
import Answer from "elements/Faq/Answer";

interface Props {
  question: string;
  answer: string;
}

const StyledAccordion = styled.li`
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

const Accordion: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledAccordion>
      <Question open={open} setOpen={setOpen} question={question} />
      <Answer className={open ? "show-answer" : ""} answer={answer} />
    </StyledAccordion>
  );
};

export default Accordion;
