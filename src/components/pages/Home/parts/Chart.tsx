import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import GetCurrencyHistoricalPrices from "api/GetCurrencyHistoricalPrices";

import GetTodayDate from "utils/GetTodayDate";

import { ITheme } from "interfaces/ITheme";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ESettingsKey } from "enums/ESettingsKey";
import { ILineChartData } from "interfaces/ILineChartData";
import { ISettings } from "interfaces/ISettings";

import StyledTile from "components/styled/StyledTile";
import StyledHeading from "components/styled/StyledHeading";
import LoaderSmall from "components/LoaderSmall";
import LineChart from "components/LineChart";

const GetStartDate = (endDate: string, diff: number): string => {
  let startDate: Date | string = new Date(endDate);

  startDate.setDate(startDate.getDate() - diff);

  startDate = startDate.toISOString().split("T")[0];

  return startDate;
};

const Chart: React.FC = () => {
  const theme = useTheme() as ITheme;

  const settings: ISettings = useSelector((state: RootState) => state.settings);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<ILineChartData>();

  const favouriteCurrency: ECurrencySymbol =
    settings[ESettingsKey.favouriteCurrency];

  const loadPrices = async (
    favouriteCurrency: Exclude<ECurrencySymbol, ECurrencySymbol.pln>,
    start: string,
    end: string
  ): Promise<void> => {
    const loadedPrices = await GetCurrencyHistoricalPrices(
      favouriteCurrency,
      start,
      end
    );

    setChartData({
      labels: loadedPrices!,
      datasets: [
        {
          borderWidth: 1,
          borderColor: theme.colors.main,
          backgroundColor: theme.colors.main,
          data: loadedPrices!,
        },
      ],
    });
  };

  useEffect(() => {
    loadPrices(
      favouriteCurrency,
      GetStartDate(GetTodayDate(), 30),
      GetTodayDate()
    );
  }, [theme]);

  useEffect(() => {
    chartData !== undefined && chartData !== null && chartData.labels.length > 0
      ? setIsLoading(false)
      : setIsLoading(true);
  }, [chartData]);

  return (
    <StyledTile as={StyledChart}>
      <StyledHeading>{favouriteCurrency} last 30 days</StyledHeading>
      {!isLoading && chartData !== undefined && chartData !== null ? (
        <LineChart chartData={chartData} />
      ) : (
        <LoaderSmall />
      )}
    </StyledTile>
  );
};

export default Chart;

const StyledChart = styled.div`
  margin: 16px 0;
  h2 {
    margin-bottom: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
  }
`;
