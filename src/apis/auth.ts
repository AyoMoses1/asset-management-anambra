// import { log } from "utils/helpers";
import {
  LOGIN_ENDPOINT,
} from "./index";
import axios from "axios";

export const executeLogin = async (
  data: LoginData
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "PATCH",
      url: LOGIN_ENDPOINT,
      data: data,
      headers: {
        "Content-Type": "application/json",
        whspay: "&sw22mewjsd4t343643?",
      },
      withCredentials: true,
    };

    const response = (await axios(options)) satisfies ResponseDataType;
    return response.data;
  } catch (error: any) {
    return { message: error.message, isSuccess: false, status: error };
  }
};
