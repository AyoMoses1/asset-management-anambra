import { UPDATE_KYC_ENDPOINT, UPLOAD_IMAGE_ENDPOINT, VERIFY_KYC_ENDPOINT } from "apis";
import axios from "axios";

export const executeUpdateKyc = async (
  data: KycUploads,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: UPDATE_KYC_ENDPOINT,
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

export const executeVerifyKyc = async (
  data: VerifyKycData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: VERIFY_KYC_ENDPOINT,
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

export const executeUploadImage = async (
  data: FormData,
  token: string
): Promise<ResponseDataType> => {
  try {
    const options = {
      method: "POST",
      url: UPLOAD_IMAGE_ENDPOINT,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        whspay: "&sw22mewjsd4t343643?",
        whcookie: `whspay=${token}`,
      },
      withCredentials: true,
    };

    const response = (await axios(options)) satisfies ResponseDataType;
    return response.data.data.url;
  } catch (error) {
    return { message: error.message, isSuccess: false, status: "error" };
  }
};
