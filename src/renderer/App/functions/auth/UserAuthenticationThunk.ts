import { createAsyncThunk } from "@reduxjs/toolkit";
import Controller from "../../api/controller";
import UserModel from "../../models/UserModel";

interface IProps {
  route: string;
  data: any;
}
export default createAsyncThunk(
  "api/user/authentication",
  async ({ data, route }: IProps) => {
    try {
      return await Controller<UserModel>({ data, url: route });
    } catch (error) {
      throw error;
    }
  }
);
