import styled from "styled-components";

import { ESettingsKeys } from "enums/ESettingsKeys";

interface Props {
  currentMainColor: string;
  handleSettingsChange: (key: ESettingsKeys, value: string | boolean) => void;
}

const CustomColor: React.FC<Props> = ({
  currentMainColor,
  handleSettingsChange,
}) => {
  return (
    <div>
      <p>Choose custom color:</p>
      <StyledColorInput
        defaultValue={currentMainColor}
        onBlur={(e) =>
          handleSettingsChange(ESettingsKeys.mainColor, e.target.value)
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
