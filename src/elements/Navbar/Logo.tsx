import styled from "styled-components";

const StyledLogo = styled.p`
  margin-right: 25px;
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  font-size: ${(props) => props.theme.typography.size_big};
  cursor: default;
  i {
    margin-right: 6px;
  }
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <i className="fas fa-wallet"></i>
      BankingApp
    </StyledLogo>
  );
};

export default Logo;
