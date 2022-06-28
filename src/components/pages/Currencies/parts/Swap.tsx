import { useState } from "react";
import styled from "styled-components";
import SwapArrows from "../elements/SwapArrows";
import SwapCurrency from "../elements/SwapCurrency";

interface ICurrency {
  symbol: string;
  amount?: number;
}

interface Props {
  wallet: ICurrency[];
}

const Swap: React.FC<Props> = ({ wallet }) => {
  const [swapFrom, setSwapFrom] = useState<string>(wallet[0].symbol);
  const [swapTo, setSwapTo] = useState<string>(
    wallet[wallet.length - 1].symbol
  );

  return (
    <StyledSwap>
      <StyledBox>
        <SwapCurrency
          wallet={wallet}
          swapCurrency={swapFrom}
          setSwapCurrency={setSwapFrom}
          outgoing={true}
        />
        <SwapArrows />
        <SwapCurrency
          wallet={wallet}
          swapCurrency={swapTo}
          setSwapCurrency={setSwapTo}
          outgoing={false}
        />
      </StyledBox>
    </StyledSwap>
  );
};

export default Swap;

const StyledSwap = styled.div`
  margin: 60px 0;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: unset;
    align-items: center;
  }
`;
