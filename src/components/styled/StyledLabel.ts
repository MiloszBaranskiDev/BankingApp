import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 6px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.typography.size_small};
`;

export default StyledLabel;
