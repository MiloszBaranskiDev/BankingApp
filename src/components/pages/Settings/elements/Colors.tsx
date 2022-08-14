import styled from "styled-components";

interface Props {
  theme: any;
  setTheme: (arg0: any) => void;
}

interface IColorProps {
  bgcColor: string;
}

const colors: string[] = [
  "#A3CB38",
  "#1289A7",
  "#B33771",
  "#4b7bec",
  "#ff793f",
  "#786fa6",
];

const Colors: React.FC<Props> = ({ theme, setTheme }) => {
  const handleColor = (color: string) => {
    setTheme({
      ...theme,
      colors: {
        ...theme.colors,
        main: color,
      },
    });
  };

  return (
    <StyledColors>
      {colors.map((color) => (
        <StyledColor
          key={color}
          bgcColor={color}
          onClick={() => handleColor(color)}
        />
      ))}
    </StyledColors>
  );
};

export default Colors;

const StyledColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

const StyledColor = styled.button<IColorProps>`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: 12px;
  margin-bottom: 12px;
  background-color: ${(props) => props.bgcColor};
  box-shadow: ${(props) => props.theme.shadow};
`;
