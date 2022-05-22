import { useState, useEffect } from "react";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import StyledInput from "elements/layout/StyledInput";
import Accordion from "parts/Faq/Accordion";

const Faq: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    // console.log(inputValue);
  }, [inputValue]);

  return (
    <>
      <StyledPageTitle>Faq</StyledPageTitle>
      <StyledInput
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter your question to find the answer."
      />
      <Accordion />
    </>
  );
};

export default Faq;
