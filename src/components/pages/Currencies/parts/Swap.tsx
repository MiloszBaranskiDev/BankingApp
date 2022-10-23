import { useEffect, useState } from "react";
import styled from "styled-components";

import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";
import { ICurrency } from "interfaces/ICurrency";

import StyledButton from "components/styled/StyledButton";
import SwapArrows from "../elements/SwapArrows";
import SwapCurrency from "../elements/SwapCurrency";

enum ESwapDirection {
  from = "from",
  to = "to",
}

enum ESwapEvent {
  select = "select",
  input = "input",
}

interface ISwapData {
  symbol: string;
  amount: number;
}

interface IProps {
  currencies: ICurrency[];
}

const Swap: React.FC<IProps> = ({ currencies }) => {
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

  const [swapFrom, setSwapFrom] = useState<ISwapData>({
    symbol: currencies[0].symbol,
    amount: 0,
  });

  const [swapTo, setSwapTo] = useState<ISwapData>({
    symbol: ECurrenciesSymbols.usd,
    amount: 0,
  });

  const reverseSwap = () => {
    setSwapFrom(swapTo);
    setSwapTo(swapFrom);
  };

  const handleSwap = () => {
    console.log("button click");
  };

  const autoConvertInputs = (direction: ESwapDirection, event: ESwapEvent) => {
    let multiplier: number;

    const firstCurrency = currencies.find(
      (currency) => currency.symbol === swapFrom.symbol
    );

    const secondCurrency = currencies.find(
      (currency) => currency.symbol === swapTo.symbol
    );

    const updateTo = () => {
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
    };

    const updateFrom = () => {
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
    };

    if (
      (direction === ESwapDirection.from && event === ESwapEvent.input) ||
      (direction === ESwapDirection.to && event === ESwapEvent.select)
    ) {
      updateTo();
    } else if (
      (direction === ESwapDirection.to && event === ESwapEvent.input) ||
      (direction === ESwapDirection.from && event === ESwapEvent.select)
    ) {
      updateFrom();
    }
  };

  useEffect(() => {
    swapFrom.amount === 0 || swapTo.amount === 0
      ? setButtonIsDisabled(true)
      : setButtonIsDisabled(false);
  }, [swapFrom.amount, swapTo.amount]);

  useEffect(() => {
    autoConvertInputs(ESwapDirection.from, ESwapEvent.input);
  }, [swapFrom.amount]);

  useEffect(() => {
    autoConvertInputs(ESwapDirection.to, ESwapEvent.input);
  }, [swapTo.amount]);

  useEffect(() => {
    autoConvertInputs(ESwapDirection.from, ESwapEvent.select);
  }, [swapFrom.symbol]);

  useEffect(() => {
    autoConvertInputs(ESwapDirection.to, ESwapEvent.select);
  }, [swapTo.symbol]);

  console.log(buttonIsDisabled, swapFrom.amount, swapTo.amount);

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
        <StyledColumm>
          <SwapArrows reverseSwap={reverseSwap} />
          <StyledButton
            as="button"
            disabled={buttonIsDisabled}
            style={buttonIsDisabled ? { cursor: "not-allowed" } : {}}
            onClick={handleSwap}
          >
            <i className="fas fa-check"></i>Submit
          </StyledButton>
        </StyledColumm>
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

const StyledColumm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }
`;
