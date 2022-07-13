import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import Item from "../elements/Item";

interface INotification {
  title: string;
  date: string;
  content: string;
  read: boolean;
  id: number;
}

const List: React.FC = () => {
  const notifications: INotification[] = useSelector(
    (state: RootState) => state.notifications
  );

  return (
    <>
      {notifications.length > 1 ? (
        <ul>
          {notifications
            .slice(0)
            .reverse()
            .map((notification) => (
              <Item
                key={notification.id}
                id={notification.id}
                title={notification.title}
                date={notification.date}
              />
            ))}
        </ul>
      ) : (
        <p>You don't have any notifications.</p>
      )}
    </>
  );
};

export default List;
