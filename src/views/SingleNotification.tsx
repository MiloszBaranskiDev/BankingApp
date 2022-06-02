import { useParams } from "react-router-dom";
import styled from "styled-components";
import Top from "parts/SingleNotification/Top";
import Content from "parts/SingleNotification/Content";

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
