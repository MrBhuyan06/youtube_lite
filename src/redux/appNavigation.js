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
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appNavigation.actions;
export default appNavigation.reducer;
