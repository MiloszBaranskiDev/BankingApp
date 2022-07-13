import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { removeNotification } from "redux/slices/NotificationsSlice";
import { useDispatch } from "react-redux";

interface Props {
  id: number;
}

const Remove: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeHandler = (id: number) => {
    dispatch(removeNotification({ id }));
    navigate("/notifications");
  };

  return (
    <StyledRemove onClick={() => removeHandler(id)}>
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
