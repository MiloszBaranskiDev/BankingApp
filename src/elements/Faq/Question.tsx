import styled from "styled-components";

interface Props {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

const StyledQuestion = styled.a`
  user-select: none;
  cursor: pointer;
`;

const Question: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <StyledQuestion onClick={() => setOpen(!open)} role="button">
      Question
    </StyledQuestion>
  );
};

export default Question;
