import styled from "styled-components";
import { useState, useEffect } from "react";

import GetCurrenciesPrices from "api/GetCurrenciesPrices";

import { ICurrency } from "interfaces/ICurrency";

import StyledHeading from "components/styled/StyledHeading";
import TotalBalanceAmount from "../elements/TotalBalanceAmount";
import TotalBalanceInfo from "../elements/TotalBalanceInfo";

interface Props {
  wallet: ICurrency[];
}

interface ILoadRates {
  (currencies: ICurrency[]): Promise<void>;
}

const TotalBalance: React.FC<Props> = ({ wallet }) => {
  const [convertedCurrencies, setConvertedCurrencies] = useState<string>();
  const mainCurrency: ICurrency = wallet.find(
    (currency) => currency.symbol === "PLN"
  )!;

  const convertCurrencies: ILoadRates = async (currencies: ICurrency[]) => {
    const loadedRates = await GetCurrenciesPrices(
      currencies.filter((currency) => currency.symbol !== mainCurrency.symbol)
    );
    let totalAmount: number = mainCurrency.balance!;

    currencies.forEach((currency) => {
      currency.symbol !== mainCurrency.symbol &&
        (totalAmount +=
          currency.balance! *
          loadedRates!.find((item) => item.symbol === currency.symbol)!.price);
    });

    setConvertedCurrencies(totalAmount.toFixed(2));
  };

  useEffect(() => {
    convertCurrencies(wallet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledTotalBalance>
      <StyledHeading>
        Total balance<span>*</span>
      </StyledHeading>
      <TotalBalanceAmount amount={convertedCurrencies} />
      <TotalBalanceInfo />
    </StyledTotalBalance>
  );
};

export default TotalBalance;

const StyledTotalBalance = styled.div`
  margin-bottom: 16px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  h2 {
    margin-bottom: 4px;
    span {
      font-weight: ${(props) => props.theme.typography.weight_normal};
    }
  }
`;
