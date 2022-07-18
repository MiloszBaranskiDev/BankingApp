import { useEffect, useRef } from "react";
import styled from "styled-components";

import { IMessage } from "interfaces/IMessage";

import Message from "../elements/Message";

interface Props {
  messages: IMessage[];
}

const Messages: React.FC<Props> = ({ messages }) => {
  const refMessages = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    refMessages.current.scrollTop = refMessages.current.scrollHeight;
  }, [messages]);

  return (
    <StyledMessages ref={refMessages}>
      {messages.map((message) => (
        <Message
          text={message.text}
          user={message.user}
          hour={message.hour}
          key={message.id}
        />
      ))}
    </StyledMessages>
  );
};

export default Messages;

const StyledMessages = styled.div`
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
