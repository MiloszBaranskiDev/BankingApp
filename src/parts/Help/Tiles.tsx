import styled from "styled-components";
import FaqTile from "elements/Help/FaqTile";
import ChatTile from "elements/Help/ChatTile";

const StyledTiles = styled.div`
  display: flex;
  justify-content: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.typography.size_extra_big};
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: ${(props) => props.theme.radius};
    padding: ${(props) => props.theme.tilePadding};
    background-color: ${(props) => props.theme.colors.bgc};
    transition: all 0.3s;
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
    <StyledTiles>
      <FaqTile />
      <ChatTile />
    </StyledTiles>
  );
};

export default Tiles;
