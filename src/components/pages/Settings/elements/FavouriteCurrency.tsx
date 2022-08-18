import React from "react";
import styled from "styled-components";
import StyledSelect from "components/styled/StyledSelect";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import { ESettingsKeys } from "enums/SettingsKeys";
import { ECurrencies } from "enums/Currencies";
import { ICurrency } from "interfaces/ICurrency";

interface Props {
  favouriteCurrency: Exclude<ECurrencies, ECurrencies.pln>;
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
        defaultValue={favouriteCurrency}
      >
        {wallet.map((currency) => (
          <React.Fragment key={currency.symbol}>
            {currency.symbol !== ECurrencies.pln && (
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
