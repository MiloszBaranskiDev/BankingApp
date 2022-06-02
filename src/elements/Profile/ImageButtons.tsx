import { useRef } from "react";
import styled from "styled-components";
import S_Button from "elements/layout/S_Button";

const S_ImageButtons = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
  button {
    display: inline-block;
    &:last-child {
      margin-top: 10px;
      background-color: ${(props) => props.theme.colors.bgc_dark};
      color: ${(props) => props.theme.colors.main};
      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        margin-top: 0;
        margin-left: 10px;
      }
    }
  }
`;

const ImageButtons: React.FC = () => {
  const uploadInput: any = useRef();

  const handleUpload = () => {
    uploadInput.current.click();
    uploadInput.current.addEventListener(
      "change",
      (e: { target: { files: (Blob | MediaSource)[] } }) => {
        console.log(URL.createObjectURL(e.target.files[0]));
      }
    );
  };

  return (
    <S_ImageButtons>
      <input ref={uploadInput} type="file" accept="image/*" hidden />
      <S_Button onClick={handleUpload} as="button">
        Upload new photo
      </S_Button>
      <S_Button as="button">Remove</S_Button>
    </S_ImageButtons>
  );
};

export default ImageButtons;
