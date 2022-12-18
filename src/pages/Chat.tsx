import { useState, useEffect } from "react";
import { loremIpsum } from "react-lorem-ipsum";

import GetRandomId from "utils/GeRandomId";
import GetCurrentHour from "utils/GetCurrentHour";

import { IMessage } from "interfaces/IMessage";

import StyledTile from "components/styled/StyledTile";
import StyledPageTitle from "components/styled/StyledPageTitle";
import Messages from "components/pages/Chat/parts/Messages";
import Controls from "components/pages/Chat/parts/Controls";

const getRandomMessage = (): IMessage => {
  const randomMessage: IMessage = {
    text: String(
      loremIpsum({
        p: 1,
        avgSentencesPerParagraph: 1,
        avgWordsPerSentence: Math.floor(Math.random() * (30 - 3 + 1) + 3),
      })
    ),
    hour: GetCurrentHour(),
    user: false,
    id: GetRandomId(),
  };

  return randomMessage;
};

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
    if (messages.length > 1 && messages[messages.length - 1].user) {
      const timer = setTimeout(() => {
        setMessages([...messages, getRandomMessage()]);
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
