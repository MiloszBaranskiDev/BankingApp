import styled from "styled-components";
import GetTodayDate from "utils/GetTodayDate";
import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";

interface Props {
  startDate: string;
  endDate: string;
  minStartDate: string;
  minEndDate: string;
  maxStartDate: string;
  setStartDate: (arg0: string) => void;
  setEndDate: (arg0: string) => void;
}

const ChartDates: React.FC<Props> = ({
  startDate,
  endDate,
  minStartDate,
  minEndDate,
  maxStartDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <StyledChartDates>
      <StyledDate>
        <StyledLabel htmlFor="start-date">From</StyledLabel>
        <StyledInput
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          type="date"
          id="start-date"
          min={minStartDate}
          max={maxStartDate}
        />
      </StyledDate>
      <StyledDate>
        <StyledLabel htmlFor="end-date">To</StyledLabel>
        <StyledInput
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          type="date"
          id="end-date"
          min={minEndDate}
          max={GetTodayDate()}
        />
      </StyledDate>
    </StyledChartDates>
  );
};

export default ChartDates;

const StyledChartDates = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    input {
      margin-bottom: 0;
    }
  }
  input {
    margin-bottom: 12px;
  }
`;

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    &:first-child {
      margin-right: 12px;
    }
  }
`;
