import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledWrapper from "elements/layout/StyledWrapper";
import Navbar from "parts/Navbar";
import Home from "views/Home";
import Wallet from "views/Wallet";
import Transactions from "views/Transactions";
import Transfer from "views/Transfer";
import Currencies from "views/Currencies";
import Card from "views/Card";
import Help from "views/Help";
import Settings from "views/Settings";
import User from "views/User";
import Faq from "views/Faq";
import Chat from "views/Chat";

const theme = {
  colors: {
    main: "#3b37c5",
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
    size_title: "32px",
    weight_normal: 400,
    weight_bold: 600,
  },
  breakpoints: {
    tablet: "768px",
    desktop: "1260px",
  },
  radius: "10px",
  shadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
  tilePadding: "30px",
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: theme.colors.bgc_dark }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <StyledWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/currencies" element={<Currencies />} />
              <Route path="/card" element={<Card />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/user" element={<User />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </StyledWrapper>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
