import styled from "styled-components";

const StyledBalanceAmount = styled.p`
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

const BalanceAmount: React.FC = () => {
  return (
    <StyledBalanceAmount>
      ~15000 PLN <span>+15%**</span>
    </StyledBalanceAmount>
  );
};

export default BalanceAmount;
