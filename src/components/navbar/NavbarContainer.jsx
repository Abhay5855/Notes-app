import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { logoutUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { PURGE } from "redux-persist";
import { setLanguage } from "../../redux/slice/languageSlice";

const NavbarContainer = () => {
  const loggedInUser = useSelector((state) => state.auth.userData);

  const [userDetails, setUserDetails] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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

  const handleSelected = (value) => {
    try {
      dispatch(setLanguage(value));
      setIsOpen(!isOpen);
    } catch (err) {}
  };

  return (
    <Navbar
      userDetails={userDetails}
      onLogout={handleLogout}
      handleOpen={handleOpen}
      isOpen={isOpen}
      handleSelected={handleSelected}
    />
  );
};

export default NavbarContainer;
