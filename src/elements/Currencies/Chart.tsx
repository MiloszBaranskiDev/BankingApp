import styled from "styled-components";
import StyledHeading from "elements/layout/StyledHeading";

interface Props {
  symbol: string;
}

const StyledChart = styled.div`
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
`;

const Chart: React.FC<Props> = ({ symbol }) => {
  return (
    <StyledChart>
      <StyledHeading>{symbol}/PLN</StyledHeading>
    </StyledChart>
  );
};

export default Chart;
