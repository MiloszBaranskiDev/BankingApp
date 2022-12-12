import styled from "styled-components";

interface IFieldError {
  text?: string;
}

const FieldError: React.FC<IFieldError> = ({ text }): JSX.Element => {
  return (
    <StyledFieldError>
      {text ? text : "This field is required."}
    </StyledFieldError>
  );
};

export default FieldError;

const StyledFieldError = styled.p`
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.typography.size_small};
`;
