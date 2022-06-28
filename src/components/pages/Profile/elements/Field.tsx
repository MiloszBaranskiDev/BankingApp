import StyledLabel from "components/layout/StyledLabel";
import StyledInput from "components/layout/StyledInput";
import { useDispatch } from "react-redux";
import { editUser } from "redux/slices/UserSlice";

interface Props {
  label: string;
  type: string;
  value: string;
}

const Field: React.FC<Props> = ({ label, type, value }) => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(editUser({ label: label, value: value }));
  };

  return (
    <>
      {type && (
        <div className="userField">
          <StyledLabel htmlFor={label}>{label}</StyledLabel>
          <StyledInput
            defaultValue={type !== "number" ? value : Number(value)}
            type={type}
            id={label}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default Field;
