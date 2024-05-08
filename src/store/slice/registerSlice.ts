/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

export enum STEPS {
  VERIFY_EMAIL = "VERIFY_EMAIL",
  VALIDATE_EMAIL = "VALIDATE_EMAIL",
  VALIDATE_MOBILE = "VALIDATE_MOBILE",
  VERIFY_MOBILE = "VERIFY_MOBILE",
  SIGN_UP = "SIGN_UP",
  VALIDATE_BVN = "VALIDATE_BVN",
  SECURE_WALLET = "SECURE_WALLET",
  RESIDENTIAL_ADDRESS = "RESIDENTIAL_ADDRESS",
  SECURE_TRANSACTIONS_GUIDE = "SECURE_TRANSACTIONS_GUIDE",
  SECURE_ACCOUNT = "SECURE_ACCOUNT",
  ACTIVATE_PIN = "ACTIVATE_PIN",
}

export const FORM_STEPS = {
  VALIDATE_EMAIL: 0,
  VERIFY_EMAIL: 1,
  VALIDATE_MOBILE: 2,
  VERIFY_MOBILE: 3,
  SIGN_UP: 4,
  RESIDENTIAL_ADDRESS: 5,
  SECURE_TRANSACTIONS_GUIDE: 6,
  SECURE_ACCOUNT: 7,
  ACTIVATE_PIN: 8,
};

type InitialStateType = {
  currentStep: keyof typeof FORM_STEPS;
  data: any;
};
const initialState: InitialStateType = {
  currentStep: "VALIDATE_EMAIL",
  data: {},
};

const createFacility = createSlice({
  name: "create",
  initialState,
  reducers: {
    updateLevel: (state, action) => {
      state.currentStep = action.payload.step;
      state.data = { ...state.data, ...action.payload.data };
    },
    clearLevelState: (state) => {
      (state.currentStep = "VERIFY_EMAIL"), (state.data = {});
    },
  },
});

export const { clearLevelState, updateLevel } = createFacility.actions;
export default createFacility.reducer;
