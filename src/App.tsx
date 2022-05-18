import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "Theme";
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
import Profile from "views/Profile";
import Faq from "views/Faq";
import Chat from "views/Chat";
import Notifications from "views/Notifications";

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
              <Route path="/profile" element={<Profile />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </StyledWrapper>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
