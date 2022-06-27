import { NavLink } from "react-router-dom";

const FaqTile: React.FC = () => {
  return (
    <NavLink to="/faq">
      <i className="fas fa-question-circle"></i>
      See answers to the most popular questions.
    </NavLink>
  );
};

export default FaqTile;
