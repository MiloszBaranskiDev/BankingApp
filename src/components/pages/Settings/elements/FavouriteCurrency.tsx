import React from "react";
import styled from "styled-components";
import StyledSelect from "components/styled/StyledSelect";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import { ESettingsKeys } from "enums/ESettingsKeys";
import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";
import { ICurrency } from "interfaces/ICurrency";

interface Props {
  favouriteCurrency: Exclude<ECurrenciesSymbols, ECurrenciesSymbols.pln>;
  handleSettingsChange: (key: ESettingsKeys, value: string | boolean) => void;
}

const FavouriteCurrency: React.FC<Props> = ({
  favouriteCurrency,
  handleSettingsChange,
}) => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);

  return (
    <StyledFavouriteCurrency>
      <p>Currency whose chart will be shown on the home page</p>
      <StyledSelect
        onChange={(e) =>
          handleSettingsChange(ESettingsKeys.favouriteCurrency, e.target.value)
        }
        value={favouriteCurrency}
      >
        {wallet.map((currency) => (
          <React.Fragment key={currency.symbol}>
            {currency.symbol !== ECurrenciesSymbols.pln && (
              <option value={currency.symbol}>{currency.symbol}</option>
            )}
          </React.Fragment>
        ))}
      </StyledSelect>
    </StyledFavouriteCurrency>
  );
};

export default FavouriteCurrency;

const StyledFavouriteCurrency = styled.div`
  p {
    margin-bottom: 10px;
  }
`;
