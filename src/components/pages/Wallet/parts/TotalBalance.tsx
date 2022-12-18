import styled from "styled-components";

import { ICurrencyRate } from "interfaces/ICurrencyRate";
import { ICurrency } from "interfaces/ICurrency";

import GetConvertedCurrencies from "utils/GetConvertedCurrencies";

import StyledTotalAmount from "components/styled/StyledTotalAmount";
import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";

interface IProps {
  currencies: ICurrency[];
  currenciesRates: ICurrencyRate[];
}

const TotalBalance: React.FC<IProps> = ({ currencies, currenciesRates }) => {
  const convertedCurrencies: number = GetConvertedCurrencies(
    currencies,
    currenciesRates
  );

  return (
    <StyledTile as={StyledTotalBalance}>
      <StyledHeading>Total balance*</StyledHeading>
      <StyledTotalAmount amount={convertedCurrencies} defaultStyle={true}>
        <span>~{convertedCurrencies}</span>
        PLN
      </StyledTotalAmount>
      <p>* Converted into PLN</p>
    </StyledTile>
  );
};

export default TotalBalance;

const StyledTotalBalance = styled.div`
  margin-bottom: 16px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p:last-child {
    font-size: ${(props) => props.theme.typography.size_small};
  }
`;
