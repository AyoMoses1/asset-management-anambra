/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  selectedCountry: CountryData;
  countries: CountryData[];
};
const initialState: InitialStateType = {
  selectedCountry: null,
  countries: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    populateCountries: (state, action) => {
      state.countries = action.payload;
    },
    populateSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { populateCountries, populateSelectedCountry } =
  countrySlice.actions;
export default countrySlice.reducer;
