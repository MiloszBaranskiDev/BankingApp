import styled from "styled-components";

const FieldError: React.FC = (): JSX.Element => {
  return <StyledFieldError>This field is required.</StyledFieldError>;
};

export default FieldError;

const StyledFieldError = styled.p`
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.typography.size_small};
`;
