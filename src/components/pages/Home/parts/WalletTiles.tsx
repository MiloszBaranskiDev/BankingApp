import styled from "styled-components";

import GetConvertedIncomesOrOutcomes from "utils/GetConvertedIncomesOrOutcomes";
import GetConvertedCurrencies from "utils/GetConvertedCurrencies";

import { ICurrency } from "interfaces/ICurrency";
import { ITransaction } from "interfaces/ITransaction";
import { ETransationType } from "enums/ETransactionType";
import { ICurrencyRate } from "interfaces/ICurrencyRate";

import WalletTile from "../elements/WalletTile";

interface IProps {
  currencies: ICurrency[];
  transactions: ITransaction[];
  currenciesRates: ICurrencyRate[];
}

interface ITile {
  transactionType: ETransationType;
  heading: string;
  amount: number;
}

const WalletTiles: React.FC<IProps> = ({
  currencies,
  currenciesRates,
  transactions,
}) => {
  const tiles: ITile[] = [
    {
      transactionType: null as any,
      heading: "Total balance*",
      amount: GetConvertedCurrencies(currencies, currenciesRates),
    },
    {
      transactionType: ETransationType.income,
      heading: "Total incomes*",
      amount: GetConvertedIncomesOrOutcomes(
        ETransationType.income,
        transactions,
        currenciesRates
      ),
    },
    {
      transactionType: ETransationType.outcome,
      heading: "Total outcomes*",
      amount:
        GetConvertedIncomesOrOutcomes(
          ETransationType.outcome,
          transactions,
          currenciesRates
        ) * -1,
    },
  ];

  return (
    <StyledWalletTiles>
      {tiles.map((tile) => (
        <WalletTile
          key={tile.heading}
          transactionType={tile.transactionType}
          heading={tile.heading}
          amount={tile.amount}
        />
      ))}
    </StyledWalletTiles>
  );
};

export default WalletTiles;

const StyledWalletTiles = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
