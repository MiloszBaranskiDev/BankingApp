import { EUserKey } from "enums/EUserKey";

export interface IUser {
  [EUserKey.name]: string;
  [EUserKey.email]: string;
  [EUserKey.phone]: string;
  [EUserKey.address]: string;
  [EUserKey.image]: string;
}
