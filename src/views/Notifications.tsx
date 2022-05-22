import StyledPageTitle from "elements/layout/StyledPageTitle";
import List from "parts/Notifications/List";

const Notifications: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Notifications</StyledPageTitle>
      <List />
    </>
  );
};

export default Notifications;
