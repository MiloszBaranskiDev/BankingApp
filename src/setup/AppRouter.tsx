import { Routes, Route } from "react-router-dom";
import Home from "components/pages/Home/Home";
import Wallet from "components/pages/Wallet/Wallet";
import Transactions from "components/pages/Transactions/Transactions";
import Transfer from "components/pages/Transfer/Transfer";
import Currencies from "components/pages/Currencies/Currencies";
import Help from "components/pages/Help/Help";
import Settings from "components/pages/Settings/Settings";
import Profile from "components/pages/Profile/Profile";
import Faq from "components/pages/Faq/Faq";
import Chat from "components/pages/Chat/Chat";
import Notifications from "components/pages/Notifications/Notifications";
import SingleNotification from "components/pages/SingleNotification/SingleNotification";

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
