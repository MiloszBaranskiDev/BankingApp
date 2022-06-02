import styled from "styled-components";

interface Props {
  text: string;
}

const S_Text = styled.p`
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typography.size_big};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Text: React.FC<Props> = ({ text }) => {
  return <S_Text>{text}</S_Text>;
};

export default Text;
