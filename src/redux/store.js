import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice.js";

const store = configureStore({
  reducer: {
    appauth: authslice,
  },
});

export default store;
