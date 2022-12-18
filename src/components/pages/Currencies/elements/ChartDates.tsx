import styled from "styled-components";
import DatePicker from "react-date-picker";

import GetTodayDate from "utils/GetTodayDate";

import StyledLabel from "components/styled/StyledLabel";

interface IProps {
  startDate: Date;
  endDate: Date;
  minStartDate: Date;
  minEndDate: Date;
  maxStartDate: Date;
  setStartDate: (arg0: Date) => void;
  setEndDate: (arg0: Date) => void;
}

const ChartDates: React.FC<IProps> = ({
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
        <StyledLabel>From</StyledLabel>
        <DatePicker
          onChange={setStartDate}
          value={startDate}
          minDate={minStartDate}
          maxDate={maxStartDate}
          format="dd.MM.yy"
          clearIcon={null}
          calendarIcon={null}
        />
      </StyledDate>
      <StyledDate>
        <StyledLabel>To</StyledLabel>
        <DatePicker
          onChange={setEndDate}
          value={endDate}
          minDate={minEndDate}
          maxDate={new Date(GetTodayDate())}
          format="dd.MM.yy"
          clearIcon={null}
          calendarIcon={null}
        />
      </StyledDate>
    </StyledChartDates>
  );
};

export default ChartDates;

const StyledChartDates = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 8px);
  width: calc(50% - 8px);
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    &:first-child {
      margin-right: 16px;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-basis: auto;
    width: auto;
  }
  .react-date-picker {
    width: 100% !important;
    margin-bottom: 20px;
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: ${(props) => props.theme.radius};
    background-color: ${(props) => props.theme.colors.bgc};
    * {
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    &__wrapper {
      border: none;
    }
    &__inputGroup {
      min-width: auto;
      text-align: center;
      &__input {
        cursor: pointer;
        padding-top: 12px;
        padding-bottom: 12px;
        height: auto;
        outline: none;
      }
    }
    .react-calendar,
    .react-calendar__navigation__arrow {
      background-color: ${(props) => props.theme.colors.bgc};
      button {
        background-color: inherit;
        font-weight: ${(props) => props.theme.typography.weight_bold};
        transition: background-color 0.3s;
        &:hover {
          background-color: ${(props) => props.theme.colors.main};
          color: white !important;
        }
        &:disabled {
          opacity: 0.2;
          pointer-events: none;
        }
      }
      .react-calendar__tile {
        &.react-calendar__month-view__days__day {
          &--neighboringMonth {
            color: inherit;
            font-weight: ${(props) => props.theme.typography.weight_normal};
          }
          &--weekend {
            color: ${(props) => props.theme.colors.red};
          }
        }
        &--active {
          background-color: ${(props) => props.theme.colors.main};
          color: white !important;
        }
      }
    }
    .react-calendar {
      box-shadow: ${(props) => props.theme.shadow};
      border-color: ${(props) => props.theme.colors.main};
      inset: unset !important;
      top: auto;
      right: 0;
      bottom: 100%;
      left: auto;
    }
  }
`;
