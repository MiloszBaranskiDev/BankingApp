import { Routes, Route } from "react-router-dom";

import { ERoute } from "enums/ERoute";

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
        <Route path={ERoute.home} element={<Home />} />
        <Route path={ERoute.wallet} element={<Wallet />} />
        <Route path={ERoute.currencies} element={<Currencies />} />
        <Route path={ERoute.transfer} element={<Transfer />} />
        <Route path={ERoute.transactions} element={<Transactions />} />
        <Route path={ERoute.help} element={<Help />} />
        <Route path={ERoute.settings} element={<Settings />} />
        <Route path={ERoute.profile} element={<Profile />} />
        <Route path={ERoute.faq} element={<Faq />} />
        <Route path={ERoute.chat} element={<Chat />} />
        <Route path={ERoute.notifications} element={<Notifications />} />
        <Route
          path={ERoute.notification + ":id"}
          element={<SingleNotification />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
