import React from "react";
import "./signup.css";
import Input from "../../../base/input/Input";
import Button from "../../../base/button/Button";
import { NavLink } from "react-router-dom";
const Signup = ({
  formData,
  handleChange,
  handleSubmit,
  isInvalidMessage,
  touched,
  isDisabled,
  validated,
}) => {
  return (
    <div className="signup__container">
      <div className="signup__heading">
        <h1>Elvator Game</h1>
      </div>
      <div className="signup__formcontainer">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <Input
            type="email"
            placeholder="email"
            required={true}
            name="email"
            value={formData.email}
            onChange={handleChange}
            feedbackMessage={touched.email || validated ? isInvalidMessage('email') : ""}
          />
          <Input
            type="string"
            placeholder="username"
            required={true}
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            feedbackMessage={touched.userName || validated ? isInvalidMessage('userName') : ""}
          />
          <Input
            type="password"
            placeholder="password"
            required={true}
            name="password"
            value={formData.password}
            onChange={handleChange}
            feedbackMessage={touched.password || validated ? isInvalidMessage('password') : ""}
          />

          <Button type="submit" variant="submit" label="Sign up" isDisabled={isDisabled}/>

          <div className="signup__already">
            <span>Already have a account ?<NavLink className="signup__link">Login</NavLink></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
