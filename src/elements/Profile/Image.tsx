import styled from "styled-components";

const S_Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  object-position: center;
`;

const Image: React.FC = () => {
  return (
    <S_Image src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" />
  );
};

export default Image;
