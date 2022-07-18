import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./Theme";
import ScrollToTop from "helpers/ScrollToTop";
import AppRouter from "./AppRouter";

import StyledWrapper from "components/styled/StyledWrapper";
import Navbar from "components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: theme.colors.bgc_dark }}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <Navbar />
          <StyledWrapper>
            <AppRouter />
          </StyledWrapper>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
