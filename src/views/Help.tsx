import styled from "styled-components";
import Tiles from "parts/Help/Tiles";

const StyledHelp = styled.div`
  padding: 60px 0;
`;

const Help: React.FC = () => {
  return (
    <StyledHelp>
      <Tiles />
    </StyledHelp>
  );
};

export default Help;
