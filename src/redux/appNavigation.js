import { createSlice } from "@reduxjs/toolkit";

const appNavigation = createSlice({
  name: "appNavigation",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggleMenu } = appNavigation.actions;
export default appNavigation.reducer;
