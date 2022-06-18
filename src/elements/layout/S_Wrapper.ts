import styled from "styled-components";

const S_Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
    width: 440px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 720px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 95%;
    max-width: 1260px;
  }
`;

export default S_Wrapper;
