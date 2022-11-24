import { ThreeDots } from "react-loader-spinner";
import { useTheme } from "styled-components";

import { ITheme } from "interfaces/ITheme";

const TypingAnimation: React.FC = () => {
  const theme = useTheme() as ITheme;

  return <ThreeDots height={20} width={60} color={theme.colors.main} />;
};

export default TypingAnimation;
