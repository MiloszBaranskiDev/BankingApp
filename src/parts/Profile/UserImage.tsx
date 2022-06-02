import { useState } from "react";
import styled from "styled-components";
import Image from "elements/Profile/Image";
import ImageButtons from "elements/Profile/ImageButtons";

const S_UserImage = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage: React.FC = () => {
  const [imageInput, setImageInput] = useState<string>();

  return (
    <S_UserImage>
      <Image />
      <ImageButtons />
    </S_UserImage>
  );
};

export default UserImage;
