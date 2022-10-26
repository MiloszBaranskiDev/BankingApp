import { useState, useEffect } from "react";

import GetCurrentHour from "utils/GetCurrentHour";
import GetRandomMessage from "utils/GetRandomMessage";

import { IMessage } from "interfaces/IMessage";

import StyledTile from "components/styled/StyledTile";
import StyledPageTitle from "components/styled/StyledPageTitle";
import Messages from "components/pages/Chat/parts/Messages";
import Controls from "components/pages/Chat/parts/Controls";

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
      <StyledTile>
        <Messages messages={messages} />
        <Controls messages={messages} setMessages={setMessages} />
      </StyledTile>
    </>
  );
};

export default Chat;
