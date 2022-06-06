import S_Label from "elements/layout/S_Label";
import S_Input from "elements/layout/S_Input";
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
          <S_Label htmlFor={label}>{label}</S_Label>
          <S_Input
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
