import { useState } from "react";
import S_PageTitle from "components/layout/S_PageTitle";
import S_Input from "components/layout/S_Input";
import Accordion from "./parts/Accordion";

interface IFaqData {
  question: string;
  answer: string;
}

const faqData: IFaqData[] = [
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
      "Lorem ipsum praesent sollicitudin ut massa dictum finibus. Etiam consectetur malesuada velit. Nullam ut semper mi. Phasellus ut tempor urna. Nulla aliquet.",
  },
];

const Faq: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();

  return (
    <>
      <S_PageTitle>Faq</S_PageTitle>
      <S_Input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Enter your question to find the answer."
      />
      <ul>
        {faqData
          .filter((faqItem) => {
            if (!inputValue) return true;
            if (
              faqItem.question
                .toLowerCase()
                .includes(inputValue.toLowerCase()) ||
              faqItem.answer.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((faqItem) => (
            <Accordion
              key={faqItem.question}
              question={faqItem.question}
              answer={faqItem.answer}
            />
          ))}
      </ul>
    </>
  );
};

export default Faq;
