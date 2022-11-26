import styled from "styled-components";
import { Link } from "react-router-dom";

import { ERoute } from "enums/ERoute";

const Logo: React.FC = () => {
  return (
    <StyledLogo as={Link} to={ERoute.home}>
      <i className="fas fa-wallet"></i>
      BankingApp
    </StyledLogo>
  );
};

export default Logo;

const StyledLogo = styled.a`
  margin-right: 25px;
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  font-size: ${(props) => props.theme.typography.size_big};
  @media (max-width: 340px) {
    font-size: ${(props) => props.theme.typography.size_normal};
  }
  i {
    margin-right: 6px;
  }
`;
