import styled from "styled-components";
import { useRef } from "react";
import { editUser } from "redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import S_Button from "components/layout/S_Button";

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
  const dispatch = useDispatch();

  const handleUpload = () => {
    uploadInput.current.click();
    uploadInput.current.addEventListener(
      "change",
      (e: { target: { files: (Blob | MediaSource)[] } }) => {
        dispatch(
          editUser({
            label: "image",
            value: URL.createObjectURL(e.target.files[0]),
          })
        );
      }
    );
  };

  const handleRemove = () => {
    dispatch(editUser({ label: "image", value: "/user_image_default.png" }));
    uploadInput.current.value = "";
  };

  return (
    <S_ImageButtons>
      <input ref={uploadInput} type="file" accept="image/*" hidden />
      <S_Button onClick={handleUpload} as="button">
        Upload new photo
      </S_Button>
      <S_Button onClick={handleRemove} as="button">
        Remove
      </S_Button>
    </S_ImageButtons>
  );
};

export default ImageButtons;
