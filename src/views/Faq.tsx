import { useState } from "react";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import StyledInput from "elements/layout/StyledInput";
import Accordion from "parts/Faq/Accordion";

interface IData {
  question: string;
  answer: string;
}

const data: IData[] = [
  {
    question: "How to make transfer?",
    answer:
      "Lorem ipsum maecenas vel condimentum turpis. Sed mollis auctor purus. Vestibulum nec venenatis turpis. Phasellus varius libero ut augue porttitor accumsan.",
  },
  {
    question: "How to swap currency?",
    answer:
      "Lorem ipsum cras maximus nulla at ipsum luctus volutpat. Maecenas placerat faucibus turpis sit amet sodales. Integer quis justo vehicula, tristique nunc nec.",
  },
  {
    question: "Can I change my image?",
    answer:
      "Lorem ipsum sed efficitur in diam quis dapibus. Praesent vitae interdum lacus. Maecenas feugiat malesuada risus sed volutpat. Fusce vitae odio viverra.",
  },
  {
    question: "Can I change my contact data?",
    answer:
      "Lorem ipsum proin placerat, eros ac placerat hendrerit, metus dolor euismod ligula, sed congue magna mi eu tellus. Maecenas ultricies ex sit amet ornare.",
  },
  {
    question: "I have not found an answer to the question.",
    answer:
      "Lorem ipsum praesent sollicitudin ut massa dictum finibus. Etiam consectetur malesuada velit. Nullam ut semper mi. Phasellus ut tempor urna. Nulla aliquet. ",
  },
];

const Faq: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();

  return (
    <>
      <StyledPageTitle>Faq</StyledPageTitle>
      <StyledInput
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter your question to find the answer."
      />
      <ul>
        {data
          .filter((item) => {
            if (!inputValue) return true;
            if (
              item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
              item.answer.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((item) => (
            <Accordion
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
      </ul>
    </>
  );
};

export default Faq;
