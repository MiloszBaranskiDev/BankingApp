import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  padding: 12px;
  outline: none;
  border: 1px solid transparent;
  width: 100%;
  transition: border-color 0.3s;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  color: ${(props) => props.theme.colors.typography_dark};
  font-size: ${(props) => props.theme.typography.size_normal};
  &:focus {
    border-color: ${(props) => props.theme.colors.main};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.typography};
  }
`;

export default StyledInput;
