import React from "react";
import "./signup.css";
import Input from "../../../base/input/Input";
import Button from "../../../base/button/Button";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup__container">
      <div className="signup__heading">
        <h1>Elvator Game</h1>
      </div>
      <div className="signup__formcontainer">
        <form autoComplete="off">
          <h2>Sign Up</h2>
          <Input
            type="email"
            placeholder="email"
            required="true"
            name="email"
          />
          <Input
            type="string"
            placeholder="username"
            required="true"
            name="userName"
          />
          <Input
            type="password"
            placeholder="password"
            required="true"
            name="password"
          />

          <Button type="submit" variant="submit" label="Sign up" />

          <div className="signup__already">
            <span>Already have a account ?<NavLink className="signup__link">Login</NavLink></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
