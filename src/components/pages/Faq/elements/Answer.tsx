import styled from "styled-components";

interface Props {
  className?: string;
  answer: string;
}

const S_Answer = styled.p`
  width: 0;
  height: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;
  &.show-answer {
    width: unset;
    height: auto;
    padding: 10px 20px 20px 20px;
    overflow: unset;
    opacity: 1;
  }
`;

const Answer: React.FC<Props> = ({ className, answer }) => {
  return <S_Answer className={className}>{answer}</S_Answer>;
};

export default Answer;
