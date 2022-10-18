import styled, { useTheme } from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IProps {
  text: string;
  value: number;
}

const CircularBar: React.FC<IProps> = ({ text, value }) => {
  const theme: any = useTheme();

  return (
    <StyledCircularBar>
      <CircularProgressbar
        text={text}
        value={value}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: `${theme.colors.main}`,
          trailColor: `${theme.colors.bgc_dark}`,
        })}
      />
    </StyledCircularBar>
  );
};

export default CircularBar;

const StyledCircularBar = styled.div`
  .CircularProgressbar {
    width: 70px;
    height: 70px;
    &-text {
      fill: ${(props) => props.theme.colors.main}!important;
    }
  }
  position: relative;
  margin-right: 20px;
  p {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;
