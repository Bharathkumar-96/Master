import React, { memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default memo(App);
