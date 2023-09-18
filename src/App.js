import React from "react";
import Header from "./components/Header.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default App;
