import styled from "styled-components";

const S_Remove = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s;
  font-size: ${(props) => props.theme.typography.size_extra_big};
  color: ${(props) => props.theme.colors.main};
  &:hover {
    color: unset;
  }
`;

const Remove: React.FC = () => {
  return (
    <S_Remove>
      <i className="far fa-trash-alt"></i>
    </S_Remove>
  );
};

export default Remove;
