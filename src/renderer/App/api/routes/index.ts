export const baseURL = "https://adams-automated-parking-hub.herokuapp.com/api";
export const socketURL = "https://adams-automated-parking-hub.herokuapp.com/";

export enum PostRoutes {
  UserLogin = "user/login",
  UserRegister = "user/register",
  UserInfoUpdate = "user/update",
  //
  CheckAdd = "check/add",
  GetTagId = "check/tag",
}

export enum GetRoutes {
  GetChecks = "checks/get",
}

export enum PutRoutes {
  CheckOut = "check/out",
}
