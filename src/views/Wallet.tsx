import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import S_PageTitle from "elements/layout/S_PageTitle";
import Chart from "parts/Wallet/Chart";
import TotalBalance from "parts/Wallet/TotalBalance";
import CurrenciesBalance from "parts/Wallet/CurrenciesBalance";

interface ICurrency {
  symbol: string;
  amount: number;
}

const S_Box = styled.div`
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
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  return (
    <>
      <S_PageTitle>Wallet</S_PageTitle>
      <S_Box>
        <S_Column>
          <TotalBalance />
          <CurrenciesBalance wallet={wallet} />
        </S_Column>
        <S_Column>
          <Chart wallet={wallet} />
        </S_Column>
        <S_Column></S_Column>
      </S_Box>
    </>
  );
};

export default Wallet;
