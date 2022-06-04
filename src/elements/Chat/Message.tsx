import { useState, useEffect } from "react";
import styled from "styled-components";
import TypingAnimation from "./TypingAnimation";

interface Props {
  text: string;
  hour: string;
  user: boolean;
}

const S_Message = styled.div`
  max-width: 90%;
  margin-bottom: 8px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 60%;
  }
  &.message-user {
    margin-left: auto;
    text-align: end;
    p:first-child {
      background-color: ${(props) => props.theme.colors.main};
      color: white;
    }
  }
`;

const S_Text = styled.p`
  padding: 10px;
  display: inline-block;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.typography.size_small};
`;

const S_Hour = styled.p`
  margin-top: 4px;
  font-size: ${(props) => props.theme.typography.size_extra_small};
`;

const Message: React.FC<Props> = ({ text, hour, user }) => {
  const [typingAnimation, setTypingAnimation] = useState<boolean>(
    !user ? true : false
  );

  useEffect(() => {
    !user &&
      setTimeout(function () {
        setTypingAnimation(false);
      }, 2000);
  }, []);

  return (
    <S_Message className={`${user ? "message-user" : ""}`}>
      {!typingAnimation ? (
        <>
          <S_Text>{text}</S_Text>
          <S_Hour>{hour}</S_Hour>
        </>
      ) : (
        <TypingAnimation />
      )}
    </S_Message>
  );
};

export default Message;
