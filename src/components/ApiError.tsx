import styled from "styled-components";

import StyledWrapper from "./styled/StyledWrapper";

const ApiError: React.FC = (): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledApiError>
        An error occurred while loading data from API. Please try refreshing the
        page.
      </StyledApiError>
    </StyledWrapper>
  );
};

export default ApiError;

const StyledApiError = styled.p`
  padding: 40px 0;
  text-align: center;
  flex-basis: 100%;
  color: ${(props) => props.theme.colors.red};
`;
