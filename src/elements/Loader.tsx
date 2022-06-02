import { RotatingLines } from "react-loader-spinner";
import styled, { useTheme } from "styled-components";

const S_Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Loader: React.FC = () => {
  const theme: any = useTheme();
  return (
    <S_Loader>
      <RotatingLines width="60" strokeColor={theme.colors.main} />
    </S_Loader>
  );
};

export default Loader;
