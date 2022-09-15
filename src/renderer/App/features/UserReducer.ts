import { createSlice } from "@reduxjs/toolkit";
import { UserAuthenticationThunk } from "../functions/auth";
import { UserReducerState } from "../store/state";

const UserReducer = createSlice({
  name: "UserReducer",
  initialState: UserReducerState,
  reducers: {
    UserLogout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserAuthenticationThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default UserReducer.reducer;
export const { UserLogout } = UserReducer.actions;
