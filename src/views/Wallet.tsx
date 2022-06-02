import styled from "styled-components";
import S_PageTitle from "elements/layout/S_PageTitle";
import Chart from "parts/Wallet/Chart";
import TotalBalance from "parts/Wallet/TotalBalance";

const S_Box = styled.div`
  margin-top: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Wallet: React.FC = () => {
  return (
    <>
      <S_PageTitle>Wallet</S_PageTitle>
      <S_Box>
        <Chart />
        <TotalBalance />
      </S_Box>
    </>
  );
};

export default Wallet;
