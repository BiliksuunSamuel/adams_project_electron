export default interface UserModel extends IUser {
  _id: string;
}

export interface IUser {
  email: string;
  role: number;
  status: number;
  username: string;
}

export const UserInfo: UserModel = {
  username: "",
  _id: "",
  email: "",
  role: 0,
  status: 1,
};
export const InitialUser: IUser = {
  username: "",
  email: "",
  role: 0,
  status: 1,
};
