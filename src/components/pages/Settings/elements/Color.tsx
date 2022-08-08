import styled from "styled-components";

interface Props {
  theme: any;
  setTheme: (arg0: any) => void;
}

const Color: React.FC<Props> = ({ theme, setTheme }) => {
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
    <div>
      <p>Choose custom color:</p>
      <StyledColorInput
        defaultValue={theme.colors.main}
        onBlur={(e) => handleColor(e.target.value)}
        type="color"
      />
    </div>
  );
};

export default Color;

const StyledColorInput = styled.input`
  margin: 10px 0 20px 0;
  border: 1px solid ${(props) => props.theme.colors.bgc_dark};
  background: ${(props) => props.theme.colors.bgc_dark};
  height: 35px;
`;
