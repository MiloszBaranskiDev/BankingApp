import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import S_PageTitle from "components/layout/S_PageTitle";
import Chart from "./parts/Chart";
import TotalBalance from "./parts/TotalBalance";
import CurrenciesBalance from "./parts/CurrenciesBalance";

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
    flex-basis: 36.5%;
    &:nth-child(2) {
      flex-basis: 25%;
    }
  }
`;

const Wallet: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  return (
    <>
      <S_PageTitle>Wallet</S_PageTitle>
      <S_Box>
        <S_Column>
          <TotalBalance wallet={wallet} />
          <CurrenciesBalance wallet={wallet} />
        </S_Column>
        <S_Column>
          <Chart wallet={wallet} />
        </S_Column>
        <S_Column>links</S_Column>
      </S_Box>
    </>
  );
};

export default Wallet;
