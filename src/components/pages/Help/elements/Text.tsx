import styled from "styled-components";

const S_Text = styled.p`
  margin-bottom: 40px;
  max-width: 1000px;
  font-size: ${(props) => props.theme.typography.size_big};
`;

const Text: React.FC = () => {
  return (
    <S_Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      veritatis exercitationem, quibusdam delectus doloribus fuga aut obcaecati
      repudiandae voluptates animi pariatur molestiae atque ipsam.
    </S_Text>
  );
};

export default Text;
