export interface ILineChartData {
  labels: number[];
  datasets: [
    {
      borderWidth: number;
      borderColor: string;
      backgroundColor: string;
      data: number[];
    }
  ];
}
