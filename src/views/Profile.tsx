import styled from "styled-components";
import S_PageTitle from "elements/layout/S_PageTitle";
import UserImage from "parts/Profile/UserImage";
import UserFields from "parts/Profile/UserFields";

const S_Profile = styled.div`
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
`;

const Profile: React.FC = () => {
  return (
    <>
      <S_PageTitle>Profile</S_PageTitle>
      <S_Profile>
        <UserImage />
        <UserFields />
      </S_Profile>
    </>
  );
};

export default Profile;
