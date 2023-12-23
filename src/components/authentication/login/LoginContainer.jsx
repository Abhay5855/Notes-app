import React, { useState } from "react";
import Login from "./Login";
import { isEmpty } from "lodash";
import { isvalidEmail } from "../../../helpers/helper";
import { useNavigate, useLocation } from "react-router-dom";
import { Signin } from "../../../api/api";
import { login } from "../../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    try {
      const res = await Signin(formData);
      const { token } = res;
      const { email, firstName, lastName, _id } = res.user;

      const data = {
        isLoggedIn: true,
        email,
        firstName,
        lastName,
        _id,
        token,
      };

      localStorage.setItem("access_token", JSON.stringify(token));
      dispatch(login(data));
      navigate(state?.path || "/home");
    } catch (err) {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setTouched({ ...touched, [name]: true });
  };

  const isInvalidMessage = (name) => {
    if (validated) return;

    switch (name) {
      case "email":
        return isEmpty(formData.email)
          ? "Email should not be empty"
          : isvalidEmail(formData.email)
          ? ""
          : "Please enter a correct email";

      case "password":
        return isEmpty(formData.password) ? "Password should not be empty" : "";
    }
  };

  const isDisabled = isEmpty(formData.email) || isEmpty(formData.password);

  return (
    <div>
      <Login
        onSubmit={handleSubmit}
        onChange={handleChange}
        touched={touched}
        formData={formData}
        isDisabled={isDisabled}
        isInvalidMessage={isInvalidMessage}
        validated={validated}
      />
    </div>
  );
};

export default LoginContainer;
