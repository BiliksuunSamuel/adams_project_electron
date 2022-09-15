import CheckModel from "../../models/CheckModel";
import UserModel from "../../models/UserModel";

export interface IUserReducerState {
  user: UserModel | null;
}

export interface IResponseReducerState {
  loading: boolean;
  error: any;
  message: any;
}

export interface IChecksReducerState {
  checks: CheckModel[];
}
