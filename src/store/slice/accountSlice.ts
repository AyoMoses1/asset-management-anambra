/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  account: AccountData | null;
  tokenStore: TokenData | null;
  isAuthenticated: boolean;
};
const initialState: InitialStateType = {
  account: null,
  tokenStore: null,
  isAuthenticated: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    clearAccount: (state) => {
      state.tokenStore = null;
      state.account = null;
      state.isAuthenticated = false;
    },
    populateAccount: (state, action) => {
      state.account = { ...state.account, ...action.payload };
      state.isAuthenticated = true;
    },
    populateToken: (state, action) => {
      state.tokenStore = action.payload;
    },
  },
});

export const { populateAccount, populateToken, clearAccount } =
  accountSlice.actions;
export default accountSlice.reducer;
