import styled from "styled-components";

const S_SwapArrows = styled.i`
  cursor: pointer;
  font-size: 36px;
  text-align: center;
  padding: 20px 0;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.main};
  &:hover {
    color: unset;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 32px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 64px;
  }
`;

const SwapArrows: React.FC = () => {
  return <S_SwapArrows className="fas fa-exchange-alt"></S_SwapArrows>;
};

export default SwapArrows;
