import styled from "styled-components";
import { NavLink } from "react-router-dom";

const S_Item = styled.li`
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
    .time {
      margin-left: 12px;
      font-size: ${(props) => props.theme.typography.size_extra_small};
    }
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.main};
  }
`;

const Item: React.FC = () => {
  return (
    <S_Item>
      <NavLink to={`/notification/22`} className="notification">
        <div className="icon">
          <i className="fas fa-arrow-down"></i>
        </div>
        <p className="title">Notification</p>
        <p className="time">7 hours ago</p>
      </NavLink>
    </S_Item>
  );
};

export default Item;
