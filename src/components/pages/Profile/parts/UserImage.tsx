import styled from "styled-components";
import Image from "../elements/Image";
import ImageButtons from "../elements/ImageButtons";

const S_UserImage = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage: React.FC = () => {
  return (
    <S_UserImage>
      <Image />
      <ImageButtons />
    </S_UserImage>
  );
};

export default UserImage;
