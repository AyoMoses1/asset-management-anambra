import { ADD_ADDRESS_ENDPOINT, PROFILE_SETTINGS_ENDPOINT } from "../index";
import axios from "axios";

export const executeAddAddress = async (
  data: AddressData,
  token: string
): Promise<ResponseDataType> => {
  console.log({ token });
  try {
    const options = {
      method: "POST",
      url: ADD_ADDRESS_ENDPOINT,
      data: data,
      headers: {
        "Content-Type": "application/json",
        whspay: "&sw22mewjsd4t343643?",
        whcookie: `whspay=${token}`,
      },
      withCredentials: true,
    };

    const response = (await axios(options)) satisfies ResponseDataType;
    return response.data;
  } catch (error) {
    return { message: error.message, isSuccess: false, status: "error" };
  }
};

export const executeSetPinCode = async (
  data: UserProfile,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "PATCH",
      url: PROFILE_SETTINGS_ENDPOINT,
      data: data,
      headers: {
        "Content-Type": "application/json",
        whspay: "&sw22mewjsd4t343643?",
        whcookie: `whspay=${token}`,
      },
      withCredentials: true,
    };

    const response = (await axios(options)) satisfies ResponseDataType;
    return response.data;
  } catch (error) {
    return { message: error.message, isSuccess: false, status: "error" };
  }
};
