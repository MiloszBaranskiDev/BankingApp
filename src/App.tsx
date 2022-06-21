import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "Theme";
import S_Wrapper from "elements/layout/S_Wrapper";
import Navbar from "parts/Navbar";
import ScrollToTop from "ScrollToTop";
import AppRouter from "AppRouter";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: theme.colors.bgc_dark }}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <Navbar />
          <S_Wrapper>
            <AppRouter />
          </S_Wrapper>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
