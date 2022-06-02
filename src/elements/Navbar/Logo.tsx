import styled from "styled-components";

const S_Logo = styled.p`
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
    <S_Logo>
      <i className="fas fa-wallet"></i>
      BankingApp
    </S_Logo>
  );
};

export default Logo;
