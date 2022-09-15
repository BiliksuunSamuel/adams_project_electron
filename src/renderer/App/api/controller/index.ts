import Axios from "axios";
import { baseURL } from "../routes";

interface IProps {
  method?: "POST" | "GET" | "PUT" | "DELETE" | "UPDATE";
  data?: any;
  url: string;
}

export default function Controller<T>({ method, data, url }: IProps) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL,
        url,
        data,
        method: method ? method : "POST",
        headers: {
          contentType: "application/json",
        },
      })
        .then((response) => resolve(response.data))
        .catch((error) =>
          reject(error?.response?.data || error?.message || error)
        );
    } catch (error) {
      reject(error);
    }
  });
}
