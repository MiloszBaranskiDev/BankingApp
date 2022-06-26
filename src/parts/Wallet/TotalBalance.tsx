import styled from "styled-components";
import { useState, useEffect } from "react";
import S_Heading from "elements/layout/S_Heading";
import TotalBalanceAmount from "elements/Wallet/TotalBalanceAmount";
import TotalBalanceInfo from "elements/Wallet/TotalBalanceInfo";
import GetCurrenciesPrices from "api/GetCurrenciesPrices";

interface ICurrency {
  symbol: string;
  amount: number;
}

interface Props {
  wallet: ICurrency[];
}

interface ILoadRates {
  (currencies: ICurrency[]): Promise<void>;
}

const S_TotalBalance = styled.div`
  margin-bottom: 12px;
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

const TotalBalance: React.FC<Props> = ({ wallet }) => {
  const [convertedCurrencies, setConvertedCurrencies] = useState<string>();
  const mainCurrency: ICurrency = wallet.find(
    (currency) => currency.symbol === "PLN"
  )!;

  const convertCurrencies: ILoadRates = async (currencies: ICurrency[]) => {
    const loadedRates = await GetCurrenciesPrices(
      currencies.filter((currency) => currency.symbol !== mainCurrency.symbol)
    );
    let totalAmount: number = mainCurrency.amount;

    currencies.forEach((currency) => {
      currency.symbol !== mainCurrency.symbol &&
        (totalAmount +=
          currency.amount *
          loadedRates!.find((item) => item.symbol === currency.symbol)!.price);
    });

    setConvertedCurrencies(totalAmount.toFixed(2));
  };

  useEffect(() => {
    convertCurrencies(wallet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S_TotalBalance>
      <S_Heading>
        Total balance<span>*</span>
      </S_Heading>
      <TotalBalanceAmount amount={convertedCurrencies} />
      <TotalBalanceInfo />
    </S_TotalBalance>
  );
};

export default TotalBalance;
