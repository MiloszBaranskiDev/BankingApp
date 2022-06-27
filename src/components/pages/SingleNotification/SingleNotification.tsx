import { useParams } from "react-router-dom";
import Top from "./parts/Top";
import Content from "./parts/Content";

const SingleNotification: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Top />
      <Content />
    </>
  );
};

export default SingleNotification;
