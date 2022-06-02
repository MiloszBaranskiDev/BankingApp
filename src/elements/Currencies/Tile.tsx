import styled from "styled-components";

interface Props {
  symbol: string;
  price?: number;
}

const S_Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: 49.3%;
    margin-bottom: 0;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: 23.8%;
  }
`;

const S_Text = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  font-size: ${(props) => props.theme.typography.size_extra_big};
  &:first-child {
    margin-bottom: 2px;
  }
`;

const Tile: React.FC<Props> = ({ price, symbol }) => {
  return (
    <S_Tile>
      <S_Text>{symbol}/PLN</S_Text>
      <S_Text>{price}</S_Text>
    </S_Tile>
  );
};

export default Tile;
