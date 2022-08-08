import styled from "styled-components";

import StyledSelect from "components/styled/StyledSelect";

const FavouriteCurrency: React.FC = () => {
  return (
    <StyledFavouriteCurrency>
      <p>
        Select the currency whose price chart you want to see on the home page.
      </p>
      <StyledSelect></StyledSelect>
    </StyledFavouriteCurrency>
  );
};

export default FavouriteCurrency;

const StyledFavouriteCurrency = styled.div`
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
`;
