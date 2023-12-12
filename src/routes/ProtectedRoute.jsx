import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, path }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const location = useLocation();

  if (isLoggedIn && path === "/register") {
    return <Navigate to="/home" replace />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" replace state={{ path: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
