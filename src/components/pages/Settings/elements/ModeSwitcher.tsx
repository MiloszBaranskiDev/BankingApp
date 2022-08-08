import styled from "styled-components";

interface Props {
  theme: any;
  setTheme: (arg0: any) => void;
}

const ModeSwitcher: React.FC<Props> = ({ theme, setTheme }) => {
  const handleMode = (isLight: boolean) => {
    setTheme({
      ...theme,
      isLight: isLight,
    });
  };

  return (
    <StyledModeSwitcher>
      <button
        onClick={() => handleMode(true)}
        className={`${theme.isLight ? "active" : ""}`}
      >
        Light
      </button>
      <button
        onClick={() => handleMode(false)}
        className={`${!theme.isLight ? "active" : ""}`}
      >
        Dark
      </button>
    </StyledModeSwitcher>
  );
};

export default ModeSwitcher;

const StyledModeSwitcher = styled.div`
  margin: 20px 0;
  button {
    border: none;
    padding: 8px 12px;
    background-color: ${(props) => props.theme.colors.bgc_dark};
    transition: all 0.3s;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    &.active {
      cursor: default;
      background-color: ${(props) => props.theme.colors.main};
      color: white;
    }
  }
`;
