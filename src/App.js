import React from "react";
import Header from "./components/Header.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import SideBar from "./components/SideBar.js";
import MainContainer from "./components/MainContainer.js";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import BodyContainer from "./components/BodyContainer.js";
import WatchPage from "./components/WatchPage.js";
import SearchPage from "./components/SearchPage.js";
import LoginPage from "./components/LoginPage.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyContainer />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search/:keyword",
        element: <SearchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
