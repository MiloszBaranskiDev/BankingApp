import { ThreeDots } from "react-loader-spinner";
import { useTheme } from "styled-components";

const TypingAnimation: React.FC = () => {
  const theme: any = useTheme();

  return <ThreeDots height={20} width={60} color={theme.colors.main} />;
};

export default TypingAnimation;
