import { RotatingLines } from "react-loader-spinner";
import styled, { useTheme } from "styled-components";

import StyledHeading from "./styled/StyledHeading";
import StyledWrapper from "./styled/StyledWrapper";

const LoaderBig: React.FC = () => {
  const theme: any = useTheme();

  return (
    <StyledWrapper>
      <StyledLoader>
        <RotatingLines width="140" strokeColor={theme.colors.main} />
        <StyledHeading as="h1">Loading data...</StyledHeading>
      </StyledLoader>
    </StyledWrapper>
  );
};

export default LoaderBig;

const StyledLoader = styled.div`
  padding: 40px 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 10px;
    text-align: center;
    color: ${(props) => props.theme.colors.main};
    font-size: ${(props) => props.theme.typography.size_big};
  }
`;
