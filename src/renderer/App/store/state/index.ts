import {
  IAppstateReducer,
  IChecksReducerState,
  IResponseReducerState,
  IUserReducerState,
} from "./IState";

export const UserReducerState: IUserReducerState = {
  user: null,
};

export const ResponseReducerState: IResponseReducerState = {
  loading: false,
  error: null,
  message: null,
};

export const ChecksReducerState: IChecksReducerState = {
  checks: [],
};

export const AppstateReducerState: IAppstateReducer = {
  service: null,
  slot: 0,
};
