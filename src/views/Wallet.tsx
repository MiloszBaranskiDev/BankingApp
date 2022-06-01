import styled from "styled-components";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import Chart from "parts/Wallet/Chart";
import Balance from "parts/Wallet/Balance";

const StyledBox = styled.div`
  margin-top: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Wallet: React.FC = () => {
  return (
    <>
      <StyledPageTitle>Wallet</StyledPageTitle>
      <StyledBox>
        <Chart />
        <Balance />
      </StyledBox>
    </>
  );
};

export default Wallet;
