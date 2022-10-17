import { v4 as uuidv4 } from "uuid";

const GetRandomId = (): string => {
  return uuidv4();
};

export default GetRandomId;
