import styled from "styled-components";

import StyledPageTitle from "components/styled/StyledPageTitle";
import UserImage from "components/pages/Profile/parts/UserImage";
import UserFields from "components/pages/Profile/parts/UserFields";

const Profile: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Profile</StyledPageTitle>
      <StyledProfile>
        <UserImage />
        <UserFields />
      </StyledProfile>
    </>
  );
};

export default Profile;

const StyledProfile = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: ${(props) => props.theme.radius};
  padding: ${(props) => props.theme.tilePadding};
`;
