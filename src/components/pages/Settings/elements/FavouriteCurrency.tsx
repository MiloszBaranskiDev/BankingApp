import React from "react";
import styled from "styled-components";
import StyledSelect from "components/styled/StyledSelect";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import { ESettingsKey } from "enums/ESettingsKey";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { IWallet } from "interfaces/IWallet";

interface IProps {
  favouriteCurrency: Exclude<ECurrencySymbol, ECurrencySymbol.pln>;
  handleSettingsChange: (key: ESettingsKey, value: string | boolean) => void;
}

const FavouriteCurrency: React.FC<IProps> = ({
  favouriteCurrency,
  handleSettingsChange,
}) => {
  const wallet: IWallet = useSelector((state: RootState) => state.wallet);

  return (
    <StyledFavouriteCurrency>
      <p>Currency whose chart will be shown on the home page</p>
      <StyledSelect
        onChange={(e) =>
          handleSettingsChange(ESettingsKey.favouriteCurrency, e.target.value)
        }
        value={favouriteCurrency}
      >
        {wallet.currencies.map((currency) => (
          <React.Fragment key={currency.symbol}>
            {currency.symbol !== ECurrencySymbol.pln && (
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
  margin-bottom: 20px;
  p {
    margin-bottom: 10px;
  }
`;
