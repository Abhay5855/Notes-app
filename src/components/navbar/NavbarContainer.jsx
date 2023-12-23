import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { logoutUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { PURGE } from "redux-persist";

const NavbarContainer = () => {
  const loggedInUser = useSelector((state) => state.auth.userData);

  const [userDetails, setUserDetails] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout);
      dispatch({ type: PURGE, key: "persist-key", result: () => null });
      localStorage.removeItem("access_token");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUserDetails(loggedInUser);
  }, [loggedInUser]);

  return <Navbar userDetails={userDetails} onLogout={handleLogout} />;
};

export default NavbarContainer;
