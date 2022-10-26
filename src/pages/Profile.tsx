import StyledTile from "components/styled/StyledTile";
import StyledPageTitle from "components/styled/StyledPageTitle";
import UserImage from "components/pages/Profile/parts/UserImage";
import UserFields from "components/pages/Profile/parts/UserFields";

const Profile: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Profile</StyledPageTitle>
      <StyledTile>
        <UserImage />
        <UserFields />
      </StyledTile>
    </>
  );
};

export default Profile;
