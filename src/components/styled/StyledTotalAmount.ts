import styled, { css } from "styled-components";

interface IAmountProps {
  amount: number;
  defaultStyle: boolean;
}

const StyledTotalAmount = styled.p<IAmountProps>`
  word-break: break-all;
  font-size: ${(props) => props.theme.typography.size_extra_big};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  ${({ amount, defaultStyle }) =>
    !defaultStyle
      ? amount > 0
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

export default StyledTotalAmount;
