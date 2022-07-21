import { useEffect, useState } from "react";
import styled from "styled-components";

import { ICurrency } from "interfaces/ICurrency";

import SwapArrows from "../elements/SwapArrows";
import SwapCurrency from "../elements/SwapCurrency";

interface ISwapData {
  symbol: string;
  amount: number;
}

interface Props {
  currencies: ICurrency[];
}

enum SwapDirection {
  from = "from",
  to = "to",
}

const Swap: React.FC<Props> = ({ currencies }) => {
  const [swapFrom, setSwapFrom] = useState<ISwapData>({
    symbol: currencies[0].symbol,
    amount: 0,
  });

  const [swapTo, setSwapTo] = useState<ISwapData>({
    symbol: "USD",
    amount: 0,
  });

  const reverseSwap = () => {
    setSwapFrom(swapTo);
    setSwapTo(swapFrom);
  };

  const autoConvertInputs = (direction: SwapDirection) => {
    let multiplier: number;

    let firstCurrency = currencies.find(
      (currency) => currency.symbol === swapFrom.symbol
    );

    let secondCurrency = currencies.find(
      (currency) => currency.symbol === swapTo.symbol
    );

    if (direction === SwapDirection.from) {
      if (swapFrom.symbol === "PLN") {
        multiplier =
          1 /
          currencies.find((currency) => currency.symbol === swapTo.symbol)!
            .price!;
      } else {
        multiplier =
          swapTo.symbol === "PLN"
            ? firstCurrency!.price!
            : firstCurrency!.price! / secondCurrency!.price!;
      }

      setSwapTo({
        ...swapTo,
        amount: swapFrom.amount * multiplier!,
      });
    } else if (direction === SwapDirection.to) {
      if (swapTo.symbol === "PLN") {
        multiplier =
          1 /
          currencies.find((currency) => currency.symbol === swapFrom.symbol)!
            .price!;
      } else {
        multiplier =
          swapFrom.symbol === "PLN"
            ? secondCurrency!.price!
            : secondCurrency!.price! / firstCurrency!.price!;
      }
      setSwapFrom({
        ...swapFrom,
        amount: swapTo.amount * multiplier!,
      });
    }
  };

  useEffect(() => {
    autoConvertInputs(SwapDirection.from);
  }, [swapFrom.amount]);

  useEffect(() => {
    autoConvertInputs(SwapDirection.to);
  }, [swapTo.amount]);

  return (
    <StyledSwap>
      <StyledBox>
        <SwapCurrency
          currencies={currencies}
          oppositeCurrency={swapTo.symbol}
          swapData={swapFrom}
          setSwapData={setSwapFrom}
          outgoing={true}
        />
        <SwapArrows reverseSwap={reverseSwap} />
        <SwapCurrency
          currencies={currencies}
          oppositeCurrency={swapFrom.symbol}
          swapData={swapTo}
          setSwapData={setSwapTo}
          outgoing={false}
        />
      </StyledBox>
    </StyledSwap>
  );
};

export default Swap;

const StyledSwap = styled.div`
  margin-bottom: 60px;
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
