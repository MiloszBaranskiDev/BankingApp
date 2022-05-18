import styled from "styled-components";

const StyledButton = styled.a`
  color: white;
  cursor: pointer;
  display: block;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 13px 9px;
  transition: border-radius 0.3s;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.typography.size_small};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  &:hover {
    border-radius: 0;
  }
`;

export default StyledButton;
