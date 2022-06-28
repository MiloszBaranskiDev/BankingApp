import styled from "styled-components";

const Remove: React.FC = () => {
  return (
    <StyledRemove>
      <i className="far fa-trash-alt"></i>
    </StyledRemove>
  );
};

export default Remove;

const StyledRemove = styled.button`
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
