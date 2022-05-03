import styled from "styled-components";

const div = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => <div className={className}>{children}</div>;

const StyledWrapper = styled(div)`
  width: 90%;
  max-width: 1920px;
  margin: 0 auto;
`;

export default StyledWrapper;
