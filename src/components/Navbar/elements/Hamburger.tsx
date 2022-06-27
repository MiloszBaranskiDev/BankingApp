import styled from "styled-components";

interface Props {
  openLinks: boolean;
  setOpenLinks: (arg0: boolean) => void;
}

const S_Hamburger = styled.button`
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

const Hamburger: React.FC<Props> = ({ openLinks, setOpenLinks }) => {
  return (
    <S_Hamburger onClick={() => setOpenLinks(!openLinks)}>
      <i className="fas fa-bars"></i>
    </S_Hamburger>
  );
};

export default Hamburger;
