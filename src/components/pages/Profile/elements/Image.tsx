import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

import { IUser } from "interfaces/IUser";
import { EUserKey } from "enums/EUserKey";

const Image: React.FC = () => {
  const user: IUser = useSelector((state: RootState) => state.user);

  return <StyledImage src={user[EUserKey.image]} />;
};

export default Image;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  object-position: center;
`;
