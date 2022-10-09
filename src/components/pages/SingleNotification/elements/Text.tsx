import styled from "styled-components";

interface IProps {
  text: string;
}

const Text: React.FC<IProps> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default Text;

const StyledText = styled.p`
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typography.size_big};
  &:last-child {
    margin-bottom: 0;
  }
`;
