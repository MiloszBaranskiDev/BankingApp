import styled from "styled-components";
import StyledButton from "elements/layout/StyledButton";

const StyledImageButtons = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
  a {
    display: inline-block;
    &:last-child {
      margin-top: 10px;
      background-color: ${(props) => props.theme.colors.bgc_dark};
      color: ${(props) => props.theme.colors.main};
      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        margin-top: 0;
        margin-left: 10px;
      }
    }
  }
`;

const ImageButtons: React.FC = () => {
  return (
    <StyledImageButtons>
      <StyledButton role="button">Upload new photo</StyledButton>
      <StyledButton role="button">Remove</StyledButton>
    </StyledImageButtons>
  );
};

export default ImageButtons;
