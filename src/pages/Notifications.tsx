import StyledPageTitle from "components/styled/StyledPageTitle";
import NotificationsList from "components/pages/Notifications/parts/NotificationsList";

const Notifications: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Notifications</StyledPageTitle>
      <NotificationsList />
    </>
  );
};

export default Notifications;
