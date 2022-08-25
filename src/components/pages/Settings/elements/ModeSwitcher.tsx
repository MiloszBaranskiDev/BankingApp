import styled from "styled-components";

import { ESettingsKeys } from "enums/ESettingsKeys";

interface Props {
  isLightMode: boolean;
  handleSettingsChange: (key: ESettingsKeys, value: string | boolean) => void;
}

const ModeSwitcher: React.FC<Props> = ({
  isLightMode,
  handleSettingsChange,
}) => {
  return (
    <StyledModeSwitcher>
      <button
        onClick={() => handleSettingsChange(ESettingsKeys.isLightMode, true)}
        className={`${isLightMode ? "active" : ""}`}
      >
        Light
      </button>
      <button
        onClick={() => handleSettingsChange(ESettingsKeys.isLightMode, false)}
        className={`${!isLightMode ? "active" : ""}`}
      >
        Dark
      </button>
    </StyledModeSwitcher>
  );
};

export default ModeSwitcher;

const StyledModeSwitcher = styled.div`
  margin: 20px 0;
  button {
    border: none;
    padding: 8px 12px;
    background-color: ${(props) => props.theme.colors.bgc_dark};
    transition: all 0.3s;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    &.active {
      cursor: default;
      background-color: ${(props) => props.theme.colors.main};
      color: white;
    }
  }
`;
