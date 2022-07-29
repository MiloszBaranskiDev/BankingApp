import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import StyledPageTitle from "components/styled/StyledPageTitle";
import WalletTiles from "./parts/WalletTiles";

import { ICurrency } from "interfaces/ICurrency";

const Home: React.FC = () => {
  const wallet: ICurrency[] = useSelector((state: RootState) => state.wallet);
  console.log(wallet);

  return (
    <>
      <StyledPageTitle>Home</StyledPageTitle>
      <WalletTiles />
    </>
  );
};

export default Home;
