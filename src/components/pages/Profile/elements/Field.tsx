import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";

import { IUserField } from "interfaces/IUserField";

interface Props {
  label: string;
  type: string;
  value: string;
  currentUserData: IUserField[];
  setUpdatedUserData: (arg0: IUserField[]) => void;
}

const Field: React.FC<Props> = ({
  label,
  type,
  value,
  currentUserData,
  setUpdatedUserData,
}) => {
  const handleChange = (value: string) => {
    const updatedArr = currentUserData.map((field, i) => {
      if (i === currentUserData.findIndex((field) => field.label === label)) {
        return { ...field, value: value };
      }

      return field;
    });

    setUpdatedUserData(updatedArr);
  };

  return (
    <>
      {type && (
        <div className="userField">
          <StyledLabel htmlFor={label}>{label}</StyledLabel>
          <StyledInput
            onChange={(e) => handleChange(String(e.target.value))}
            defaultValue={type !== "number" ? value : Number(value)}
            type={type}
            id={label}
          />
        </div>
      )}
    </>
  );
};

export default Field;
