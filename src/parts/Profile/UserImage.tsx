import styled from "styled-components";
import Image from "elements/Profile/Image";
import ImageButtons from "elements/Profile/ImageButtons";

const StyledUserImage = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage: React.FC = () => {
  return (
    <StyledUserImage>
      <Image />
      <ImageButtons />
    </StyledUserImage>
  );
};

export default UserImage;
