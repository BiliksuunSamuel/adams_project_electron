import { createSlice } from "@reduxjs/toolkit";
import { UserAuthenticationThunk } from "../functions/auth";
import { ChecksThunk } from "../functions/thunks";
import { ResponseReducerState } from "../store/state";

const ResponseReducer = createSlice({
  name: "ResponseReducer",
  initialState: ResponseReducerState,
  reducers: {
    ResponseFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    ResponsePending: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    ResponseSuccessful: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    ResponseReset: (state) => {
      state = ResponseReducerState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserAuthenticationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(UserAuthenticationThunk.fulfilled, (state) => {
        state.error = null;
        state.message = null;
        state.loading = false;
      })
      .addCase(UserAuthenticationThunk.rejected, (state, action) => {
        state.error = action.error.message || action.payload;
        state.loading = false;
        state.message = null;
      })
      .addCase(ChecksThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(ChecksThunk.fulfilled, (state, action) => {
        state.error = null;
        state.message = action.payload.message;
        state.loading = false;
      })
      .addCase(ChecksThunk.rejected, (state, action) => {
        state.error = action.error.message || action.payload;
        state.loading = false;
        state.message = null;
      });
  },
});

export default ResponseReducer.reducer;
export const {
  ResponseFail,
  ResponseSuccessful,
  ResponsePending,
  ResponseReset,
} = ResponseReducer.actions;
