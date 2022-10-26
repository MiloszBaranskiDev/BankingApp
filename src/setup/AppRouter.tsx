import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Wallet from "pages/Wallet";
import Transactions from "pages/Transactions";
import Transfer from "pages/Transfer";
import Currencies from "pages/Currencies";
import Help from "pages/Help";
import Settings from "pages/Settings";
import Profile from "pages/Profile";
import Faq from "pages/Faq";
import Chat from "pages/Chat";
import Notifications from "pages/Notifications";
import SingleNotification from "pages/SingleNotification";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notification/:id" element={<SingleNotification />} />
      </Routes>
    </>
  );
};

export default AppRouter;
