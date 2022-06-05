import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

const S_Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  object-position: center;
`;

const Image: React.FC = () => {
  const { image } = useSelector((state: RootState) => state.user);

  return <S_Image src={image} />;
};

export default Image;
