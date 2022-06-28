import styled from "styled-components";

const Date: React.FC = () => {
  return <StyledDate>12.05.2022</StyledDate>;
};

export default Date;

const StyledDate = styled.p`
  margin-left: 12px;
  font-size: ${(props) => props.theme.typography.size_big};
  color: ${(props) => props.theme.colors.main};
`;
