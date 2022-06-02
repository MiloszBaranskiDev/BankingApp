import styled from "styled-components";

const S_Date = styled.p`
  margin-left: 12px;
  font-size: ${(props) => props.theme.typography.size_big};
  color: ${(props) => props.theme.colors.main};
`;

const Date: React.FC = () => {
  return <S_Date>12.05.2022</S_Date>;
};

export default Date;
