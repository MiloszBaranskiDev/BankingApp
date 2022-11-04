import styled from "styled-components";

const ApiError: React.FC = (): JSX.Element => {
  return (
    <StyledApiError>
      An error occurred while loading data from API. Please try refreshing the
      page.
    </StyledApiError>
  );
};

export default ApiError;

const StyledApiError = styled.p`
  flex-basis: 100%;
  color: ${(props) => props.theme.colors.red};
`;
