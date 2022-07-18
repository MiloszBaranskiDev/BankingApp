import { useState } from "react";
import styled from "styled-components";
import { ITransaction } from "interfaces/ITransaction";

interface Props {
  top: string;
  content: string | ITransaction;
}

const Accordion: React.FC<Props> = ({ top, content }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledAccordion>
      <StyledQuestion onClick={() => setOpen(!open)} role="button">
        <i
          className={open ? "fas fa-chevron-up reverse" : "fas fa-chevron-up"}
        ></i>
        {top}
      </StyledQuestion>
      {typeof content === "string" ? (
        <StyledContent className={open ? "show-content" : ""}>
          {content}
        </StyledContent>
      ) : (
        <StyledContent as={"ul"} className={open ? "show-content" : ""}>
          {content.details.map((detail) => (
            <li key={Object.values(detail)[0]}>
              <p>
                {Object.entries(detail).map(([key, value]) => (
                  <span key={key}>{value}</span>
                ))}
              </p>
            </li>
          ))}
        </StyledContent>
      )}
    </StyledAccordion>
  );
};

export default Accordion;

const StyledAccordion = styled.li`
  margin-bottom: 20px;
  border: 1px solid transparent;
  transition: border 0.3s;
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.colors.bgc};
  box-shadow: ${(props) => props.theme.shadow};
  &:hover {
    border-color: ${(props) => props.theme.colors.main};
  }
  &:first-child {
    margin-top: 50px;
  }
`;

const StyledQuestion = styled.a`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding: 20px;
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  i {
    margin-right: 12px;
    transform: rotate(-180deg);
    transition: transform 0.3s;
    color: ${(props) => props.theme.colors.main};
    &.reverse {
      transform: rotate(0deg);
    }
  }
`;

const StyledContent = styled.p`
  width: 0;
  height: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;
  li {
    line-height: 26px;
    font-size: ${(props) => props.theme.typography.size_big};
    span:first-child {
      margin-right: 12px;
      position: relative;
      font-weight: ${(props) => props.theme.typography.weight_bold};
      &::after {
        content: ":";
        position: absolute;
        right: -5px;
      }
    }
  }
  &.show-content {
    width: unset;
    height: auto;
    padding: 10px 20px 20px 20px;
    overflow: unset;
    opacity: 1;
  }
`;
