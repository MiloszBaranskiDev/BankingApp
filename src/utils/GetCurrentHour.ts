const GetCurrentHour = (): string => {
  const date: Date = new Date();

  const currentHour: string =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0");

  return currentHour;
};

export default GetCurrentHour;
