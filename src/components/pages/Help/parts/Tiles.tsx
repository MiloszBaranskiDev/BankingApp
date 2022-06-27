import styled from "styled-components";
import FaqTile from "../elements/FaqTile";
import ChatTile from "../elements/ChatTile";

const S_Tiles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
  a {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${(props) => props.theme.colors.bgc};
    font-size: ${(props) => props.theme.typography.size_extra_big};
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: ${(props) => props.theme.radius};
    padding: ${(props) => props.theme.tilePadding};
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      flex-basis: 49.3%;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.bgc};
    }
    i {
      margin-bottom: 16px;
      font-size: 60px;
    }
  }
`;

const Tiles: React.FC = () => {
  return (
    <S_Tiles>
      <FaqTile />
      <ChatTile />
    </S_Tiles>
  );
};

export default Tiles;
