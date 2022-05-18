import styled from "styled-components";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import UserImage from "parts/Profile/UserImage";

const StyledProfile = styled.div`
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
`;

const Profile: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Profile</StyledPageTitle>
      <StyledProfile>
        <UserImage />
      </StyledProfile>
    </>
  );
};

export default Profile;
