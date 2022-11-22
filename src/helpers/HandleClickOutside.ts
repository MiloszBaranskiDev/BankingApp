import { SetStateAction } from "react";

const HandleClickOutside = (
  ref: { current: { contains: (arg0: any) => any } },
  show: boolean,
  setShow: {
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  const handleClickOutside = (e: Event) => {
    if (show && ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
};

export default HandleClickOutside;
