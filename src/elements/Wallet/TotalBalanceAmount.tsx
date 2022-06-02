import styled from "styled-components";

const S_TotalBalanceAmount = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  font-size: ${(props) => props.theme.typography.size_title};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  span {
    margin-left: 8px;
    color: #00cf00;
    font-size: ${(props) => props.theme.typography.size_normal};
    font-weight: ${(props) => props.theme.typography.weight_normal};
  }
`;

const TotalBalanceAmount: React.FC = () => {
  return (
    <S_TotalBalanceAmount>
      ~15000 PLN <span>+15%**</span>
    </S_TotalBalanceAmount>
  );
};

export default TotalBalanceAmount;
