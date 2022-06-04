import { useState, useEffect } from "react";
import styled from "styled-components";
import GetCurrentHour from "utils/GetCurrentHour";
import GetRandomMessage from "utils/GetRandomMessage";
import S_PageTitle from "elements/layout/S_PageTitle";
import Messages from "parts/Chat/Messages";
import Controls from "parts/Chat/Controls";

interface IMessage {
  text: string;
  hour: string;
  user: boolean;
  id: number;
}

const S_Chat = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
`;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      text: "Hello, how can I help you?",
      hour: GetCurrentHour(),
      user: false,
      id: 1337,
    },
  ]);

  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].user === true) {
      setMessages([...messages, GetRandomMessage()]);
    }
  }, [messages]);

  return (
    <>
      <S_PageTitle>Chat</S_PageTitle>
      <S_Chat>
        <Messages messages={messages} />
        <Controls messages={messages} setMessages={setMessages} />
      </S_Chat>
    </>
  );
};

export default Chat;
