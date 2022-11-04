const GetCollectedPercentage = (
  currentAmount: number,
  targetAmount: number
): number => {
  return (100 * currentAmount) / targetAmount;
};

export default GetCollectedPercentage;
