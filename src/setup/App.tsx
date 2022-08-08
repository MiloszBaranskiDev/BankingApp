import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "helpers/ScrollToTop";
import AppRouter from "./AppRouter";

import StyledWrapper from "components/styled/StyledWrapper";
import Navbar from "components/Navbar/Navbar";

interface Props {
  defaultTheme?: any;
}

const App: React.FC<Props> = ({
  defaultTheme = {
    isLight: true,
    colors: {
      main: "#3b37c5",
      bgc: "white",
      bgc_dark: "#f7f9fb",
      green: "#44bd32",
      red: "#eb4d4b",
      typography: "#a6afc0",
    },
    typography: {
      size_small: "14px",
      size_normal: "16px",
      size_big: "18px",
      size_extra_small: "12px",
      size_extra_big: "24px",
      size_title: "32px",
      weight_normal: 400,
      weight_bold: 600,
    },
    breakpoints: {
      mobile_big: "480px",
      tablet: "768px",
      desktop: "1260px",
    },
    radius: "10px",
    shadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
    tilePadding: "30px",
  },
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: theme.colors.bgc_dark }}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <Navbar />
          <StyledWrapper>
            <AppRouter theme={theme} setTheme={setTheme} />
          </StyledWrapper>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
