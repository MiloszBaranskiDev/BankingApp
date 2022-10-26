import { useEffect, useRef } from "react";
import styled from "styled-components";

import { IMessage } from "interfaces/IMessage";

import StyledTile from "components/styled/StyledTile";
import Message from "../elements/Message";

interface IProps {
  messages: IMessage[];
}

const Messages: React.FC<IProps> = ({ messages }) => {
  const refMessages = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    refMessages.current.scrollTop = refMessages.current.scrollHeight;
  }, [messages]);

  return (
    <StyledTile as={StyledMessages} ref={refMessages}>
      {messages.map((message) => (
        <Message
          text={message.text}
          user={message.user}
          hour={message.hour}
          key={message.id}
        />
      ))}
    </StyledTile>
  );
};

export default Messages;

const StyledMessages = styled.div`
  margin-bottom: 30px;
  height: 360px;
  overflow-y: auto;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 420px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 480px;
  }
`;
