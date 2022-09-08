import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import GetCurrencyHistoricalPrices from "api/GetCurrencyHistoricalPrices";

import GetTodayDate from "utils/GetTodayDate";

import { ECurrenciesSymbols } from "enums/ECurrenciesSymbols";
import { ESettingsKeys } from "enums/ESettingsKeys";
import { ILineChartData } from "interfaces/ILineChartData";
import { ISettings } from "interfaces/ISettings";

import StyledHeading from "components/styled/StyledHeading";
import Loader from "components/Loader";
import LineChart from "components/LineChart";

const GetStartDate = (endDate: string, diff: number) => {
  let startDate: Date | string = new Date(endDate);

  startDate.setDate(startDate.getDate() - diff);

  startDate = startDate.toISOString().split("T")[0];

  return startDate;
};

const Chart: React.FC = () => {
  const theme: any = useTheme();

  const settings: ISettings = useSelector((state: RootState) => state.settings);

  const [loading, setLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<ILineChartData>();

  const favouriteCurrency: ECurrenciesSymbols =
    settings[ESettingsKeys.favouriteCurrency];

  const loadPrices = async (
    favouriteCurrency: Exclude<ECurrenciesSymbols, ECurrenciesSymbols.pln>,
    start: string,
    end: string
  ) => {
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
      ? setLoading(false)
      : setLoading(true);
  }, [chartData]);

  return (
    <StyledChart>
      <StyledHeading>{favouriteCurrency} last 30 days</StyledHeading>
      {!loading && chartData !== undefined && chartData !== null ? (
        <LineChart chartData={chartData} />
      ) : (
        <Loader />
      )}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  margin: 16px 0;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  h2 {
    margin-bottom: 30px;
  }
`;
