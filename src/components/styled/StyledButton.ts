import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 12px 18px;
  outline: none;
  border: none;
  transition: all 0.3s;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.typography.size_small};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  &.success {
    background-color: ${(props) => props.theme.colors.green};
  }
  i {
    margin-right: 6px;
  }
  &:hover {
    border-radius: 0;
  }
`;

export default StyledButton;
