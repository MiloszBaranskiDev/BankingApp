import styled from "styled-components";

interface Props {
  className?: string;
  answer: string;
}

const StyledAnswer = styled.p`
  height: 0;
  padding: 0;
  opacity: 0;
  transition: all 0.3s;
  &.show-answer {
    height: auto;
    padding: 10px 20px 20px 20px;
    opacity: 1;
  }
`;

const Answer: React.FC<Props> = ({ className, answer }) => {
  return <StyledAnswer className={className}>{answer}</StyledAnswer>;
};

export default Answer;
