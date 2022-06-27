import styled from "styled-components";
import Picker from "emoji-picker-react";

interface Props {
  inputValue: string;
  setInputValue: (arg0: string) => void;
  showEmojiPicker: boolean;
  setShowEmojiPicker: (arg0: boolean) => void;
}

const S_EmojiBtn = styled.button`
  cursor: pointer;
  border: none;
  width: 40px;
  background-color: ${(props) => props.theme.colors.bgc_dark};
  i {
    font-size: ${(props) => props.theme.typography.size_big};
  }
`;

const S_EmojiPicker = styled.div`
  position: absolute;
  right: 0;
  bottom: 56px;
`;

const Emoji: React.FC<Props> = ({
  inputValue,
  setInputValue,
  showEmojiPicker,
  setShowEmojiPicker,
}) => {
  const handleEmoji = (e: any, emojiObject: { emoji: string }) => {
    setInputValue(inputValue + emojiObject.emoji);
  };

  return (
    <>
      <S_EmojiBtn onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        <i className="fas fa-smile"></i>
      </S_EmojiBtn>
      {showEmojiPicker && (
        <S_EmojiPicker>
          <Picker onEmojiClick={handleEmoji} />
        </S_EmojiPicker>
      )}
    </>
  );
};

export default Emoji;
