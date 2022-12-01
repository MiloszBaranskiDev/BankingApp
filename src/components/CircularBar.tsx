import styled, { useTheme, css } from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { ITheme } from "interfaces/ITheme";

interface IProps {
  text: string;
  value: number;
  completed?: boolean;
}

interface ICircularBar {
  completed?: boolean;
}

const CircularBar: React.FC<IProps> = ({ text, value, completed }) => {
  const theme = useTheme() as ITheme;

  return (
    <StyledCircularBar completed={completed}>
      <CircularProgressbar
        text={text}
        value={value}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: `${!completed ? theme.colors.main : theme.colors.green}`,
          trailColor: `${theme.colors.bgc_dark}`,
        })}
      />
    </StyledCircularBar>
  );
};

export default CircularBar;

const StyledCircularBar = styled.div<ICircularBar>`
  .CircularProgressbar {
    width: 70px;
    height: 70px;
    position: relative;
    margin-right: 20px;
    &-text {
      ${({ completed }) =>
        !completed
          ? css`
              fill: ${(props) => props.theme.colors.main}!important;
            `
          : css`
              font-weight: ${(props) => props.theme.typography.weight_bold};
              font-size: ${(props) => props.theme.typography.size_title};
              fill: ${(props) => props.theme.colors.green}!important;
            `}
    }
  }
  p {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;
