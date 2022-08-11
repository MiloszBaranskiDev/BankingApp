import styled from "styled-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { editUser } from "redux/slices/UserSlice";

import StyledButton from "components/styled/StyledButton";

const ImageButtons: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);
  const uploadInput: any = useRef();

  const updateUserData = (path: string) => {
    const updatedArr = userData.map((field, i) => {
      if (i === userData.findIndex((field) => field.label === "image")) {
        return { ...field, value: path };
      }

      return field;
    });

    return updatedArr;
  };

  const handleUpload = () => {
    uploadInput.current.click();
    uploadInput.current.addEventListener(
      "change",
      (e: { target: { files: (Blob | MediaSource)[] } }) => {
        dispatch(
          editUser({
            updatedArr: updateUserData(URL.createObjectURL(e.target.files[0])),
          })
        );
      }
    );
  };

  const handleRemove = () => {
    dispatch(
      editUser({ updatedArr: updateUserData("/user_image_default.png") })
    );
    uploadInput.current.value = "";
  };

  return (
    <StyledImageButtons>
      <input ref={uploadInput} type="file" accept="image/*" hidden />
      <StyledButton onClick={handleUpload} as="button">
        Upload new photo
      </StyledButton>
      <StyledButton onClick={handleRemove} as="button">
        Remove
      </StyledButton>
    </StyledImageButtons>
  );
};

export default ImageButtons;

const StyledImageButtons = styled.div`
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
