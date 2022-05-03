import { ThemeProvider } from "styled-components";
import Navbar from "parts/Navbar";

const theme = {
  colors: {
    main: "#3867d6",
    bgc: "white",
    bgc_darker: "#f7f9fb",
    typography: "#a6afc0",
    typography_darker: "#101b3f",
  },
};

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: theme.colors.bgc_darker }}>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
