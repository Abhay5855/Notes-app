import React, { useState } from "react";
import Signup from "./Signup";
import { isEmpty } from "lodash";
import { isValidPassword, isvalidEmail } from "../../../helpers/helper";
import { Register } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [touched, setTouched] = useState({});
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Using the spread operator to ensure immutability
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    setTouched({ ...touched, [name]: true });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    setLoading(true);

    try {
      await Register(formData);
      setLoading(false);
      toast.success("User registered successfully");
      navigate("/");
    } catch (err) {
      toast.error("Failed to signup please try again");
      setLoading(false);

      setFormData({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
    }
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
        return isEmpty(formData.password)
          ? "Password should not be empty"
          : isValidPassword(formData.password)
          ? ""
          : "Password must contain at least one uppercase letter, one number, and one special character";

      case "lastName":
        return isEmpty(formData.lastName)
          ? "last name should not be empty"
          : "";

      case "firstName":
        return isEmpty(formData.firstName)
          ? "first name should not be empty"
          : "";
    }
  };

  const isDisabled =
    isEmpty(formData.email) ||
    isEmpty(formData.password) ||
    isEmpty(formData.firstName) ||
    isEmpty(formData.lastName);

  return (
    <div>
      <Signup
        isInvalidMessage={isInvalidMessage}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        touched={touched}
        isDisabled={isDisabled}
        validated={validated}
        isLoading={loading}
      />
    </div>
  );
};

export default SignupContainer;
