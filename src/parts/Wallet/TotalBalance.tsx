import styled from "styled-components";
import S_Heading from "elements/layout/S_Heading";
import TotalBalanceAmount from "elements/Wallet/TotalBalanceAmount";
import TotalBalanceInfo from "elements/Wallet/TotalBalanceInfo";

const S_TotalBalance = styled.div`
  margin-bottom: 12px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  h2 {
    span {
      font-weight: ${(props) => props.theme.typography.weight_normal};
    }
  }
`;

const Balance: React.FC = () => {
  return (
    <S_TotalBalance>
      <S_Heading>
        Total balance<span>*</span>
      </S_Heading>
      <TotalBalanceAmount />
      <TotalBalanceInfo />
    </S_TotalBalance>
  );
};

export default Balance;
