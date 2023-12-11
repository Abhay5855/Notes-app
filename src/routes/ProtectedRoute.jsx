import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const checkLogin = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(checkLogin);
  }, [checkLogin]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
