import styled from "styled-components";

interface Props {
  theme: any;
  setTheme: (arg0: any) => void;
}

const CustomColor: React.FC<Props> = ({ theme, setTheme }) => {
  const handleCustomColor = (color: string) => {
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
        onBlur={(e) => handleCustomColor(e.target.value)}
        type="color"
      />
    </div>
  );
};

export default CustomColor;

const StyledColorInput = styled.input`
  margin: 5px 0 20px 0;
  border: 1px solid ${(props) => props.theme.colors.bgc_dark};
  background: ${(props) => props.theme.colors.bgc_dark};
  height: 35px;
`;
