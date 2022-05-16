import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => props.theme.typography.size_big};
  margin-bottom: 40px;
  max-width: 1000px;
`;

const Text: React.FC = () => {
  return (
    <StyledText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      veritatis exercitationem, quibusdam delectus doloribus fuga aut obcaecati
      repudiandae voluptates animi pariatur molestiae atque ipsam.
    </StyledText>
  );
};

export default Text;
