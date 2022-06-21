import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import Wallet from "views/Wallet";
import Transactions from "views/Transactions";
import Transfer from "views/Transfer";
import Currencies from "views/Currencies";
import Help from "views/Help";
import Settings from "views/Settings";
import Profile from "views/Profile";
import Faq from "views/Faq";
import Chat from "views/Chat";
import Notifications from "views/Notifications";
import SingleNotification from "views/SingleNotification";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/currencies" element={<Currencies />} />
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
