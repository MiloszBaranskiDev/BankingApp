import styled from "styled-components";

interface IProps {
  openLinks: boolean;
  setOpenLinks: (arg0: boolean) => void;
}

const Hamburger: React.FC<IProps> = ({ openLinks, setOpenLinks }) => {
  return (
    <StyledHamburger onClick={() => setOpenLinks(!openLinks)}>
      <i className="fas fa-bars"></i>
    </StyledHamburger>
  );
};

export default Hamburger;

const StyledHamburger = styled.button`
  display: block;
  margin-left: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: none;
  }
  i {
    font-size: 28px;
    color: ${(props) => props.theme.colors.main};
  }
`;
