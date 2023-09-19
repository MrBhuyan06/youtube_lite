import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice.js";
import theme from "./theme.js";
import appNavigation from "./appNavigation.js";

const store = configureStore({
  reducer: {
    appauth: authslice,
    themes: theme,
    menu: appNavigation,
  },
});

export default store;
