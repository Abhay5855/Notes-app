import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const NavbarContainer = () => {
  const loggedInUser = useSelector((state) => state.auth.userData);

  console.log(loggedInUser, "loggedIn user");

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setUserDetails(loggedInUser);
  }, [loggedInUser]);

  return <Navbar userDetails={userDetails} />;
};

export default NavbarContainer;
