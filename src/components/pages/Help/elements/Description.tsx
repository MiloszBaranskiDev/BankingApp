import styled from "styled-components";

const Description: React.FC = () => {
  return (
    <StyledDescription>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      veritatis exercitationem, quibusdam delectus doloribus fuga aut obcaecati
      repudiandae voluptates animi pariatur molestiae atque ipsam.
    </StyledDescription>
  );
};

export default Description;

const StyledDescription = styled.p`
  margin-bottom: 40px;
  max-width: 1000px;
  font-size: ${(props) => props.theme.typography.size_big};
`;
