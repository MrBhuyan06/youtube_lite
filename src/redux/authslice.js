import { createSlice } from "@reduxjs/toolkit";
// import { fetchUser } from "../config/helper.js";
// const userInfo = fetchUser();

const authslice = createSlice({
  name: "auth",
  initialState: {
    // user: userInfo,
    user: {
      name: "abhishek ",
      age: "21",
    },
  },
  reducers: {
    login: (state, action) => {
      console.log("hello");
      state.user = action.payload;
    },
  },
});

export const { login } = authslice.actions;
export default authslice.reducer;
