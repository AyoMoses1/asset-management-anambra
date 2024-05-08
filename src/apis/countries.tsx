import { log } from "utils/helpers";
import { GET_COUNTRIES_ENDPOINT } from "./index";

export const executeGetCountries = async (): Promise<ResponseDataType> => {
  try {
    const options: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        whspay: "&sw22mewjsd4t343643?",
      },
    };
    const request = await fetch(GET_COUNTRIES_ENDPOINT, options);
    const response = (await request.json()) satisfies ResponseDataType;
    return response;
  } catch (error: any) {
    log("LOGIN [ERROR]:", error.message);
    return { message: error.message, isSuccess: false } as ResponseDataType;
  }
};