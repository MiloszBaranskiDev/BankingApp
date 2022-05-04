import { ThemeProvider } from "styled-components";
import Navbar from "parts/Navbar";

const theme = {
  colors: {
    main: "#3867d6",
    bgc: "white",
    bgc_dark: "#f7f9fb",
    typography: "#a6afc0",
    typography_dark: "#101b3f",
  },
  typography: {
    size_small: "14px",
    size_normal: "16px",
    size_big: "18px",
    size_extra_small: "12px",
    size_extra_big: "24px",
    weight_normal: 400,
    weight_bold: 600,
  },
  radius: "10px",
  shadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
};

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: theme.colors.bgc_dark }}>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
