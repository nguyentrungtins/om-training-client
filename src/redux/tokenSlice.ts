import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface TokenSlice {
  jwt: null | string;
}

// Initial state
const initialState: TokenSlice = {
  jwt: null,
};

// Actual Slice
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    // Action to set the authentication status
    setTokenState(state, action) {
      state.jwt = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.token,
      };
    },
  },
});

export const { setTokenState } = tokenSlice.actions;

export const selectTokenState = (state: AppState) => state.token.jwt;

export default tokenSlice.reducer;
