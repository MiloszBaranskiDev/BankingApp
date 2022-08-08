import StyledPageTitle from "components/styled/StyledPageTitle";
import Theme from "./parts/Theme";
import FavouriteCurrency from "./parts/FavouriteCurrency";

interface Props {
  theme: any;
  setTheme: (arg0: any) => void;
}

const Settings: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <>
      <StyledPageTitle>Settings</StyledPageTitle>
      <Theme theme={theme} setTheme={setTheme} />
      <FavouriteCurrency />
    </>
  );
};

export default Settings;
