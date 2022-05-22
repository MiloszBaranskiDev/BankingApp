import { useState } from "react";
import Question from "elements/Faq/Question";
import Answer from "elements/Faq/Answer";

const AccordionItem: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li>
      <Question open={open} setOpen={setOpen} />
      <Answer />
    </li>
  );
};

export default AccordionItem;
