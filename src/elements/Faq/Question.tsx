import styled from "styled-components";

interface Props {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  question: string;
}

const StyledQuestion = styled.a`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding: 20px;
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  i {
    margin-right: 12px;
    transform: rotate(-180deg);
    transition: transform 0.3s;
    color: ${(props) => props.theme.colors.main};
    &.reverse {
      transform: rotate(0deg);
    }
  }
`;

const Question: React.FC<Props> = ({ open, setOpen, question }) => {
  return (
    <StyledQuestion onClick={() => setOpen(!open)} role="button">
      <i
        className={open ? "fas fa-chevron-up reverse" : "fas fa-chevron-up"}
      ></i>
      {question}
    </StyledQuestion>
  );
};

export default Question;
