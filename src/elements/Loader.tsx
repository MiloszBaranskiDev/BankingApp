import { RotatingLines } from "react-loader-spinner";
import styled, { useTheme } from "styled-components";

const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Loader: React.FC = () => {
  const theme: any = useTheme();
  return (
    <StyledLoader>
      <RotatingLines width="60" strokeColor={theme.colors.main} />
    </StyledLoader>
  );
};

export default Loader;
