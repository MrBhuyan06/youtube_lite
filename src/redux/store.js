import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice.js";
import theme from "./theme.js";

const store = configureStore({
  reducer: {
    appauth: authslice,
    themes: theme,
  },
});

export default store;
