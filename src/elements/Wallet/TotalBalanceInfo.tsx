import styled from "styled-components";

const S_TotalBalanceInfo = styled.p`
  font-size: ${(props) => props.theme.typography.size_extra_small};
`;

const TotalBalanceInfo: React.FC = () => {
  return (
    <>
      <S_TotalBalanceInfo>
        *All currencies converted into PLN
      </S_TotalBalanceInfo>
      <S_TotalBalanceInfo>**Compared to 24h ago</S_TotalBalanceInfo>
    </>
  );
};

export default TotalBalanceInfo;
