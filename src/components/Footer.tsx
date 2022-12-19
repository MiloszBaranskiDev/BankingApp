import styled from "styled-components";

import StyledWrapper from "./styled/StyledWrapper";

const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <StyledFooter>
        <StyledWrapper>
          <StyledList>
            <li>
              <a
                href="https://github.com/MiloszBaranskiDev/BankingApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </li>
            <li>
              <a
                href="https://miloszbaranskidev.github.io/my-website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </StyledList>
        </StyledWrapper>
      </StyledFooter>
    </StyledFooterContainer>
  );
};

export default Footer;

const StyledFooterContainer = styled.footer`
  padding-top: 60px;
  margin-top: auto;
`;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  li {
    a {
      display: block;
      padding: 20px 40px 20px 0;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        transition: background-color 0.3s;
        background-color: ${(props) => props.theme.colors.typography};
      }
      &:hover {
        transition: color 0.3s;
        color: ${(props) => props.theme.colors.main};
        &::before {
          background-color: ${(props) => props.theme.colors.main};
        }
      }
    }
    &:last-child {
      a {
        &::before {
          display: none;
        }
      }
    }
  }
`;
