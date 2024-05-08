import { CHANGE_PASSWORD_ENDPOINT, CHANGE_PIN_ENDPOINT, FORGOT_PIN_ENDPOINT, REQUEST_OTP_ENDPOINT, SET_SECURITY_QUESTION_ENDPOINT, UPDATE_SECURITY_QUESTION_ENDPOINT, VERIFY_OTP_ENDPOINT } from "apis";
import axios from "axios";



export const executeRequestOtp = async (
  data: VerificationType,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: REQUEST_OTP_ENDPOINT,
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

export const executeVerifyOtp = async (
  data: VerificationType,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: VERIFY_OTP_ENDPOINT,
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

export const executeChangePin = async (
  data: SecuritySettingsData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: CHANGE_PIN_ENDPOINT,
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

export const executeResetPin = async (
  data: SecuritySettingsData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: FORGOT_PIN_ENDPOINT,
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

export const executeChangePassword = async (
  data: SecuritySettingsData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: CHANGE_PASSWORD_ENDPOINT,
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


export const executeSetSecurityQuestion = async (
  data: SecuritySettingsData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: SET_SECURITY_QUESTION_ENDPOINT,
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

export const executeUpdateSecurityQuestion = async (
  data: SecuritySettingsData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: UPDATE_SECURITY_QUESTION_ENDPOINT,
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