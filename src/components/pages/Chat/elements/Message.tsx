import { useState, useEffect } from "react";
import styled from "styled-components";
import TypingAnimation from "./TypingAnimation";

interface Props {
  text: string;
  hour: string;
  user: boolean;
}

const Message: React.FC<Props> = ({ text, hour, user }) => {
  const [typingAnimation, setTypingAnimation] = useState<boolean>(
    !user ? true : false
  );

  useEffect(() => {
    !user &&
      setTimeout(function () {
        setTypingAnimation(false);
      }, 800);
  }, []);

  return (
    <StyledMessage className={`${user ? "message-user" : ""}`}>
      {!typingAnimation ? (
        <>
          <StyledText>{text}</StyledText>
          <StyledHour>{hour}</StyledHour>
        </>
      ) : (
        <TypingAnimation />
      )}
    </StyledMessage>
  );
};

export default Message;

const StyledMessage = styled.div`
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

const StyledText = styled.p`
  padding: 10px;
  display: inline-block;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) => props.theme.typography.size_small};
`;

const StyledHour = styled.p`
  margin-top: 4px;
  font-size: ${(props) => props.theme.typography.size_extra_small};
`;
