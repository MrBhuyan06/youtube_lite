import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice.js";
import theme from "./theme.js";
import appNavigation from "./appNavigation.js";
import cacheData from "./cacheData.js";

const store = configureStore({
  reducer: {
    appauth: authslice,
    themes: theme,
    menu: appNavigation,
    cache: cacheData,
  },
});

export default store;
