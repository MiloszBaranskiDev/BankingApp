import styled from "styled-components";

import { ESettingsKey } from "enums/ESettingsKey";

interface IProps {
  currentMainColor: string;
  handleSettingsChange: (key: ESettingsKey, value: string | boolean) => void;
}

const CustomColor: React.FC<IProps> = ({
  currentMainColor,
  handleSettingsChange,
}) => {
  return (
    <div>
      <p>Choose custom color:</p>
      <StyledColorInput
        defaultValue={currentMainColor}
        onBlur={(e) =>
          handleSettingsChange(ESettingsKey.mainColor, e.target.value)
        }
        type="color"
      />
    </div>
  );
};

export default CustomColor;

const StyledColorInput = styled.input`
  margin-top: 5px;
  border: 1px solid ${(props) => props.theme.colors.bgc_dark};
  background: ${(props) => props.theme.colors.bgc_dark};
  height: 35px;
`;
