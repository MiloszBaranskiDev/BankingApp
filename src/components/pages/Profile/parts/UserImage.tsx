import styled from "styled-components";
import Image from "../elements/Image";
import ImageButtons from "../elements/ImageButtons";

const UserImage: React.FC = () => {
  return (
    <StyledUserImage>
      <Image />
      <ImageButtons />
    </StyledUserImage>
  );
};

export default UserImage;

const StyledUserImage = styled.div`
  display: flex;
  align-items: center;
`;
