import styled from "styled-components";
import S_PageTitle from "elements/layout/S_PageTitle";
import Chart from "parts/Wallet/Chart";
import TotalBalance from "parts/Wallet/TotalBalance";
import CurrenciesBalance from "parts/Wallet/CurrenciesBalance";

const S_Box = styled.div`
  margin-top: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;

const S_Column = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: 32.5%;
  }
`;

const Wallet: React.FC = () => {
  return (
    <>
      <S_PageTitle>Wallet</S_PageTitle>
      <S_Box>
        <S_Column>
          <TotalBalance />
          <CurrenciesBalance />
        </S_Column>
        <S_Column>
          <Chart />
        </S_Column>
        <S_Column></S_Column>
      </S_Box>
    </>
  );
};

export default Wallet;
