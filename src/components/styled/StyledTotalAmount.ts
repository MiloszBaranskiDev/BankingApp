import styled, { css } from "styled-components";

interface IAmountProps {
  amount: number;
  defaultStyle: boolean;
}

const StyledTotalAmount = styled.p<IAmountProps>`
  font-size: ${(props) => props.theme.typography.size_title};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  span {
    word-break: break-all;
    margin-right: 6px;
  }
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
`;

export default StyledTotalAmount;
