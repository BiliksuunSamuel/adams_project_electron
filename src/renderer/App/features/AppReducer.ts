import { createSlice } from "@reduxjs/toolkit";
import { AppstateReducerState } from "../store/state";

const AppReducer = createSlice({
  name: "AppReducer",
  initialState: AppstateReducerState,
  reducers: {
    setService: (state, action) => {
      state.service = action.payload;
    },
    setSlot: (state, action) => {
      state.slot = action.payload;
    },
  },
});

export default AppReducer.reducer;
export const { setService, setSlot } = AppReducer.actions;
