import { RotatingLines } from "react-loader-spinner";
import styled, { useTheme } from "styled-components";

import { ITheme } from "interfaces/ITheme";

const LoaderSmall: React.FC = () => {
  const theme = useTheme() as ITheme;
  return (
    <StyledLoader>
      <RotatingLines width="60" strokeColor={theme.colors.main} />
    </StyledLoader>
  );
};

export default LoaderSmall;

const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
