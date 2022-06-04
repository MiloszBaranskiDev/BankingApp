import { useState } from "react";
import styled from "styled-components";
import GetCurrentHour from "utils/GetCurrentHour";
import GetMessageId from "utils/GetMessageId";
import S_Input from "elements/layout/S_Input";
import S_Button from "elements/layout/S_Button";
import Emoji from "elements/Chat/Emoji";

interface IMessage {
  text: string;
  hour: string;
  user: boolean;
  id: number;
}

interface Props {
  messages: IMessage[];
  setMessages: (arg0: IMessage[]) => void;
}

const S_Controls = styled.div`
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

const Controls: React.FC<Props> = ({ messages, setMessages }) => {
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
          id: GetMessageId(),
        },
      ]);
      setInputValue("");
      setShowEmojiPicker(false);
    }
  };

  return (
    <S_Controls>
      <S_Input
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
      <S_Button onClick={handleSend} as={"button"} className="message-btn">
        <i className="fas fa-paper-plane"></i>
      </S_Button>
    </S_Controls>
  );
};

export default Controls;
