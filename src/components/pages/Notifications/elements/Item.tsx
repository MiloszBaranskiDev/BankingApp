import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  date: string;
}

const Item: React.FC<Props> = ({ id, title, date }) => {
  return (
    <StyledItem>
      <NavLink to={`/notification/${id}`} className="notification">
        <div className="icon">
          <i className="fas fa-arrow-down"></i>
        </div>
        <p className="title">{title}</p>
        <p className="date">{date}</p>
      </NavLink>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.li`
  margin-bottom: 20px;
  border: 1px solid transparent;
  transition: border 0.3s;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.3s;
    color: ${(props) => props.theme.colors.main};
    .icon {
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 12px;
      background-color: ${(props) => props.theme.colors.main};
      i {
        color: white;
        font-size: ${(props) => props.theme.typography.size_small};
      }
    }
    .title {
      margin-right: auto;
      font-weight: ${(props) => props.theme.typography.weight_bold};
    }
    .date {
      margin-left: 12px;
      font-size: ${(props) => props.theme.typography.size_extra_small};
    }
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.main};
  }
`;
