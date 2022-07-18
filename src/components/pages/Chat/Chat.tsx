import { useState, useEffect } from "react";
import styled from "styled-components";

import GetCurrentHour from "utils/GetCurrentHour";
import GetRandomMessage from "utils/GetRandomMessage";

import { IMessage } from "interfaces/IMessage";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Messages from "./parts/Messages";
import Controls from "./parts/Controls";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      text: "Hello, how can I help you?",
      hour: GetCurrentHour(),
      user: false,
      id: "4a4aeb4d-6b6d-4bad-9bdd-1b0d7b3dcb6d",
    },
  ]);

  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].user === true) {
      const timer = setTimeout(() => {
        setMessages([...messages, GetRandomMessage()]);
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <>
      <StyledPageTitle>Chat</StyledPageTitle>
      <StyledChat>
        <Messages messages={messages} />
        <Controls messages={messages} setMessages={setMessages} />
      </StyledChat>
    </>
  );
};

export default Chat;

const StyledChat = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
`;
