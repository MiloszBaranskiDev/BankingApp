import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { INotification } from "interfaces/INotification";

import NotificationItem from "../elements/NotificationItem";

const NotificationsList: React.FC = () => {
  const notifications: INotification[] = useSelector(
    (state: RootState) => state.notifications
  );

  return (
    <>
      {notifications.length > 0 ? (
        <ul>
          {notifications
            .slice(0)
            .reverse()
            .map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                title={notification.title}
                date={notification.date}
                read={notification.read}
              />
            ))}
        </ul>
      ) : (
        <p>You don't have any notifications.</p>
      )}
    </>
  );
};

export default NotificationsList;
