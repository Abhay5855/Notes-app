import React, { useState } from "react";
import Login from "./Login";
import { isEmpty } from "lodash";
import { isvalidEmail } from "../../../helpers/helper";
import { useNavigate } from "react-router-dom";
import { Signin } from "../../../api/api";

const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValidated(true);

    try {
      const res = await Signin(formData);

      //save the token
      localStorage.setItem("access_token", JSON.stringify(res.token));
      navigate("/home");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
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
