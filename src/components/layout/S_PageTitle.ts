import styled from "styled-components";

const S_PageTitle = styled.h1`
  padding: 60px 0 40px 0;
  font-size: ${(props) => props.theme.typography.size_title};
  color: ${(props) => props.theme.colors.main};
`;

export default S_PageTitle;
