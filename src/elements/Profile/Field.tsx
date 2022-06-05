import S_Label from "elements/layout/S_Label";
import S_Input from "elements/layout/S_Input";

interface Props {
  label: string;
  type: string;
  value: string | number;
}

const Field: React.FC<Props> = ({ label, type, value }) => {
  return (
    <div className="userField">
      <S_Label htmlFor={label.toLowerCase()}>{label}</S_Label>
      <S_Input value={value} type={type} id={label.toLowerCase()} />
    </div>
  );
};

export default Field;
