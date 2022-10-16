import StyledPageTitle from "components/styled/StyledPageTitle";
import List from "components/pages/Notifications/parts/List";

const Notifications: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Notifications</StyledPageTitle>
      <List />
    </>
  );
};

export default Notifications;
