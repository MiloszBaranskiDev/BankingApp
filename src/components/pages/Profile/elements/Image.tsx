import styled from "styled-components";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";

interface IUserField {
  label: string;
  type: string;
  value: string;
}

const Image: React.FC = () => {
  const userFields: IUserField[] = useSelector(
    (state: RootState) => state.user
  );

  const imagePath: string = userFields.find(
    (item) => item.label === "image"
  )!.value;

  return <StyledImage src={imagePath} />;
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
