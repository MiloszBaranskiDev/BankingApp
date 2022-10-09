import { useState } from "react";
import styled from "styled-components";

import GetCurrentHour from "utils/GetCurrentHour";
import GetRandomId from "utils/GeRandomId";
import { IMessage } from "interfaces/IMessage";

import StyledInput from "components/styled/StyledInput";
import StyledButton from "components/styled/StyledButton";
import Emoji from "../elements/Emoji";

interface IProps {
  messages: IMessage[];
  setMessages: (arg0: IMessage[]) => void;
}

const Controls: React.FC<IProps> = ({ messages, setMessages }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const handleSend = () => {
    if (inputValue.length > 0) {
      setMessages([
        ...messages,
        {
          text: inputValue,
          hour: GetCurrentHour(),
          user: true,
          id: GetRandomId(),
        },
      ]);
      setInputValue("");
      setShowEmojiPicker(false);
    }
  };

  return (
    <StyledControls>
      <StyledInput
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Type a message"
        className="message-input"
      />
      <Emoji
        inputValue={inputValue}
        setInputValue={setInputValue}
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
      />
      <StyledButton onClick={handleSend} as={"button"} className="message-btn">
        <i className="fas fa-paper-plane"></i>
      </StyledButton>
    </StyledControls>
  );
};

export default Controls;

const StyledControls = styled.div`
  display: flex;
  position: relative;
  .message-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .message-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 55px;
    i {
      font-size: ${(props) => props.theme.typography.size_big};
    }
  }
`;
