import { useEffect, useRef } from "react";
import styled from "styled-components";
import Message from "elements/Chat/Message";

interface Props {
  messages: IMessage[];
}

interface IMessage {
  text: string;
  hour: string;
  user: boolean;
  id: number;
}

const S_Messages = styled.div`
  margin-bottom: 30px;
  height: 360px;
  overflow-y: auto;
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 420px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 480px;
  }
`;

const Messages: React.FC<Props> = ({ messages }) => {
  const refMessages: any = useRef();

  useEffect(() => {
    refMessages.current.scrollTop = refMessages.current.scrollHeight;
  }, [messages]);

  return (
    <S_Messages ref={refMessages}>
      {messages.map((message) => (
        <Message
          text={message.text}
          user={message.user}
          hour={message.hour}
          key={message.id}
        />
      ))}
    </S_Messages>
  );
};

export default Messages;
