import { createSlice } from "@reduxjs/toolkit";

const cacheData = createSlice({
  name: "cacheData",
  initialState: {},
  reducers: {
    cacheREsults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { cacheREsults } = cacheData.actions;
export default cacheData.reducer;
