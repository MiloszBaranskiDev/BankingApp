import styled from "styled-components";
import Picker from "emoji-picker-react";

interface IProps {
  inputValue: string;
  setInputValue: (arg0: string) => void;
  showEmojiPicker: boolean;
  setShowEmojiPicker: (arg0: boolean) => void;
}

const Emoji: React.FC<IProps> = ({
  inputValue,
  setInputValue,
  showEmojiPicker,
  setShowEmojiPicker,
}) => {
  const handleEmoji = (
    e: React.MouseEvent,
    emojiObject: { emoji: string }
  ): void => {
    setInputValue(inputValue + emojiObject.emoji);
  };

  return (
    <>
      <StyledEmojiBtn onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        <i className="fas fa-smile"></i>
      </StyledEmojiBtn>
      {showEmojiPicker && (
        <StyledEmojiPicker>
          <Picker onEmojiClick={handleEmoji} />
        </StyledEmojiPicker>
      )}
    </>
  );
};

export default Emoji;

const StyledEmojiBtn = styled.button`
  cursor: pointer;
  border: none;
  width: 40px;
  background-color: ${(props) => props.theme.colors.bgc_dark};
  i {
    font-size: ${(props) => props.theme.typography.size_big};
  }
`;

const StyledEmojiPicker = styled.div`
  position: absolute;
  right: 0;
  bottom: 56px;
`;
