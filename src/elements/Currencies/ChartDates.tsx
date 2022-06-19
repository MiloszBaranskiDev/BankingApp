import styled from "styled-components";
import GetTodayDate from "utils/GetTodayDate";
import S_Label from "elements/layout/S_Label";
import S_Input from "elements/layout/S_Input";

interface Props {
  startDate: string;
  endDate: string;
  setStartDate: (arg0: string) => void;
  setEndDate: (arg0: string) => void;
}

const S_ChartDates = styled.div`
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

const S_Date = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    &:first-child {
      margin-right: 12px;
    }
  }
`;

const ChartDates: React.FC<Props> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <S_ChartDates>
      <S_Date>
        <S_Label htmlFor="start-date">From</S_Label>
        <S_Input
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          type="date"
          id="start-date"
          min=""
          max=""
        />
      </S_Date>
      <S_Date>
        <S_Label htmlFor="end-date">To</S_Label>
        <S_Input
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          type="date"
          id="end-date"
          min=""
          max={endDate}
        />
      </S_Date>
    </S_ChartDates>
  );
};

export default ChartDates;
