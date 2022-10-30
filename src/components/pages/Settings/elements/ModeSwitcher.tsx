import styled from "styled-components";

import { ESettingsKey } from "enums/ESettingsKey";

interface IProps {
  isLightMode: boolean;
  handleSettingsChange: (key: ESettingsKey, value: string | boolean) => void;
}

const ModeSwitcher: React.FC<IProps> = ({
  isLightMode,
  handleSettingsChange,
}) => {
  return (
    <StyledModeSwitcher>
      <button
        onClick={() => handleSettingsChange(ESettingsKey.isLightMode, true)}
        className={`${isLightMode ? "active" : ""}`}
      >
        Light
      </button>
      <button
        onClick={() => handleSettingsChange(ESettingsKey.isLightMode, false)}
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
