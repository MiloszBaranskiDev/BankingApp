import styled from "styled-components";
import Header from "parts/Help/Header";
import Tiles from "parts/Help/Tiles";

const StyledHelp = styled.div``;

const Help: React.FC = () => {
  return (
    <StyledHelp>
      <Header />
      <Tiles />
    </StyledHelp>
  );
};

export default Help;
