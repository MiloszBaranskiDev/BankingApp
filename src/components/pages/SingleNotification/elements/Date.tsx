import styled from "styled-components";

interface IProps {
  date: string;
}

const Date: React.FC<IProps> = ({ date }) => {
  return <StyledDate>{date}</StyledDate>;
};

export default Date;

const StyledDate = styled.p`
  margin-left: 12px;
  font-size: ${(props) => props.theme.typography.size_big};
  color: ${(props) => props.theme.colors.main};
`;
