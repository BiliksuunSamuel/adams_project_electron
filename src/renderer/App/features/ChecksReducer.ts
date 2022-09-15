import { createSlice } from "@reduxjs/toolkit";
import { ChecksThunk } from "../functions/thunks";
import { ChecksReducerState } from "../store/state";

export default createSlice({
  name: "ChecksReducer",
  initialState: ChecksReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ChecksThunk.fulfilled, (state, action) => {
      state.checks = action.payload.data;
    });
  },
}).reducer;
