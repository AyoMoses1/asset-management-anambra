const BASE_URL = `https://whspay-backend-prod-qefxjgz2ia-uc.a.run.app/api/v1`;

export const LOGIN_ENDPOINT = BASE_URL + "/account";
export const VALIDATE_EMAIL = BASE_URL + "/account/send-verification-otp";
export const VERIFY_EMAIL_PHONE = BASE_URL + "/account/otp-verification";
export const CREATE_ACCOUNT_ENDPOINT = BASE_URL + "/account";
export const GET_COUNTRIES_ENDPOINT = BASE_URL + "/country";

// KYC
export const VERIFY_KYC_ENDPOINT = BASE_URL + "/account/verify-kyc-and-face";
export const UPLOAD_IMAGE_ENDPOINT = BASE_URL + "/setting/upload";
export const UPDATE_KYC_ENDPOINT = BASE_URL + "/setting/update-kyc";

//USER SETTINGS
export const ADD_ADDRESS_ENDPOINT = BASE_URL + "/setting/address";
export const PROFILE_SETTINGS_ENDPOINT = BASE_URL + "/setting/profile";
export const REQUEST_OTP_ENDPOINT = BASE_URL + "/setting/send-otp";
export const VERIFY_OTP_ENDPOINT = BASE_URL + "/setting/verify-otp";
export const CHANGE_PIN_ENDPOINT = BASE_URL + "/setting/change-pin";
export const FORGOT_PIN_ENDPOINT = BASE_URL + "/setting/forgot-pin";
export const CHANGE_PASSWORD_ENDPOINT = BASE_URL + "/setting/change-password";
export const SET_SECURITY_QUESTION_ENDPOINT =
  BASE_URL + "/setting/add-secret-question";
export const UPDATE_SECURITY_QUESTION_ENDPOINT =
  BASE_URL + "/setting/update-secret-question";

export const REGISTER_ENDPOINT = BASE_URL + "/auth/sign-up";
