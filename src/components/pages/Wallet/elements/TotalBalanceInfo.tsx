import styled from "styled-components";

const TotalBalanceInfo: React.FC = () => {
  return (
    <>
      <StyledTotalBalanceInfo>
        * All currencies converted into PLN
      </StyledTotalBalanceInfo>
      <StyledTotalBalanceInfo>** Compared to 24h ago</StyledTotalBalanceInfo>
    </>
  );
};

export default TotalBalanceInfo;

const StyledTotalBalanceInfo = styled.p`
  font-size: ${(props) => props.theme.typography.size_small};
`;
