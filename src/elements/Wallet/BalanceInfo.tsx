import styled from "styled-components";

const StyledBalanceInfo = styled.p`
  font-size: ${(props) => props.theme.typography.size_extra_small};
`;

const BalanceInfo: React.FC = () => {
  return (
    <>
      <StyledBalanceInfo>*All currencies converted into PLN</StyledBalanceInfo>
      <StyledBalanceInfo>**Compared to month ago</StyledBalanceInfo>
    </>
  );
};

export default BalanceInfo;
