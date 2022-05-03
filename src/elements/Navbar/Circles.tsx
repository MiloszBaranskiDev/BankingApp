import { ReactElement } from "react";
import styled from "styled-components";

interface CircleInterface {
  key: string;
  inside: ReactElement;
  action: null;
}

const StyledCircles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: auto;
`;

const circle = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => <div className={className}>{children}</div>;

const StyledCircle = styled(circle)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 20px;
  margin-right: 10px;
  background-color: ${(props) => props.theme.colors.bgc_darker};
  color: ${(props) => props.theme.colors.typography};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: white;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Circles: React.FC = () => {
  const circles: CircleInterface[] = [
    {
      key: "bell",
      inside: <i className="fas fa-bell"></i>,
      action: null,
    },
    {
      key: "settings",
      inside: <i className="fas fa-cog"></i>,
      action: null,
    },
    {
      key: "user",
      inside: <i className="fas fa-user"></i>,
      action: null,
    },
  ];

  return (
    <StyledCircles>
      {circles.map((circle: CircleInterface) => (
        <StyledCircle key={circle.key}>{circle.inside}</StyledCircle>
      ))}
    </StyledCircles>
  );
};

export default Circles;
