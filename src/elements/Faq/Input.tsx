import styled from "styled-components";
import { useState } from "react";

const StyledInput = styled.input`
  border: none;
  padding: 10px;
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
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 25px;
  }
`;

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();
  console.log(inputValue);

  return (
    <StyledInput
      type="text"
      placeholder="Enter your problem to find question more easily."
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
