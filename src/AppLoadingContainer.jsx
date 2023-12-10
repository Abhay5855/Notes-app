import React from "react";
import App from "./App";
import { Outlet } from "react-router-dom";

const AppLoadingContainer = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default AppLoadingContainer;
