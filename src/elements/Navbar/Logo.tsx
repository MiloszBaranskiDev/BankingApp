import styled from "styled-components";
import { NavLink } from "react-router-dom";

const S_Logo = styled.a`
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

const Logo: React.FC = () => {
  return (
    <S_Logo as={NavLink} to="/">
      <i className="fas fa-wallet"></i>
      BankingApp
    </S_Logo>
  );
};

export default Logo;
