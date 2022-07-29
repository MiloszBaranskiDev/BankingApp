import styled, { css } from "styled-components";

import StyledHeading from "components/styled/StyledHeading";

interface Props {
  heading: string;
  number: number;
}

interface IBtnProps {
  number: number;
  defaultStyle: boolean;
}

enum Heading {
  balance = "balance",
  incomes = "incomes",
}

const WalletTile: React.FC<Props> = ({ heading, number }) => {
  return (
    <StyledWalletTile>
      <StyledHeading>{heading}</StyledHeading>
      <StyledNumber
        number={number}
        defaultStyle={heading.toLowerCase() === Heading.balance}
      >
        {heading.toLowerCase() !== Heading.incomes ? number : "+" + number}{" "}
        SYMBOL
      </StyledNumber>
    </StyledWalletTile>
  );
};

export default WalletTile;

const StyledWalletTile = styled.div`
  flex-basis: 100%;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: calc(33% - 8px);
    margin-bottom: 0;
  }
`;

const StyledNumber = styled.p<IBtnProps>`
  word-break: break-all;
  font-size: ${(props) => props.theme.typography.size_extra_big};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  ${({ number, defaultStyle }) =>
    !defaultStyle
      ? number > 0
        ? css`
            color: ${(props) => props.theme.colors.green};
          `
        : css`
            color: ${(props) => props.theme.colors.red};
          `
      : null}

  @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
    font-size: ${(props) => props.theme.typography.size_title};
  }
`;
