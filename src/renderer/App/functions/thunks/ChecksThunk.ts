import { createAsyncThunk } from "@reduxjs/toolkit";
import Controller from "../../api/controller";
import CheckModel from "../../models/CheckModel";

interface IProps {
  data?: any;
  route: string;
  method?: "POST" | "GET" | "PUT" | "DELETE";
}

export default createAsyncThunk(
  "api/checks/add",
  async ({ data, route, method }: IProps) => {
    try {
      return await Controller<{ data: CheckModel[]; message: any }>({
        data,
        method,
        url: route,
      });
    } catch (error) {
      throw error;
    }
  }
);
