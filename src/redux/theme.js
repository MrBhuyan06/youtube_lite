import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "apptheme",
  initialState: {
    apptheme: false,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.apptheme = !state.apptheme;
    },
  },
});
export const { changeTheme } = theme.actions;
export default theme.reducer;
