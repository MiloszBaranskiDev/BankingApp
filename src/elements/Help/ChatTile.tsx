import { NavLink } from "react-router-dom";

const ChatTile: React.FC = () => {
  return (
    <NavLink to="/chat">
      <i className="fas fa-comment-dots"></i>
      Describe your problem in chat.
    </NavLink>
  );
};

export default ChatTile;
