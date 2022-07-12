import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Top from "./parts/Top";
import Content from "./parts/Content";

interface INotification {
  title: string;
  date: string;
  content: string;
  read: boolean;
  id: number;
}

const SingleNotification: React.FC = () => {
  const { id } = useParams();
  const notifications: INotification[] = useSelector(
    (state: RootState) => state.notifications
  );
  const notification: INotification = notifications.find(
    (notification) => notification.id === Number(id)
  )!;

  console.log(notification);

  return (
    <>
      <Top title={notification.title} date={notification.date} />
      <Content text={notification.content} />
    </>
  );
};

export default SingleNotification;
