import React, { useState } from "react";
import Signup from "./Signup";
import { forEach, isEmpty } from "lodash";
import { isValidPassword, isvalidEmail } from "../../../helpers/helper";

const SignupContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
  });
 
  const [touched , setTouched] = useState({});
  const [validated, setValidated] = useState(false);

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Using the spread operator to ensure immutability
    setFormData((prevData) => ({ ...prevData, [name]: value }));


    setTouched({...touched, [name] : true});
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    // clear the input feilds
    setFormData({
      email : "",
      password : "",
      userName : "",
    });

  };

  const isInvalidMessage = (name) => {

    if(validated) return;

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
          : "Your password must contain one uppercase letter, one lowercase letter and one number, and must be at least 8 characters long.";

      case "userName":
        return isEmpty(formData.userName) ? "username should not be empty" : "";
    }
  };

  const isDisabled = isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.userName);

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
      />
    </div>
  );
};

export default SignupContainer;
