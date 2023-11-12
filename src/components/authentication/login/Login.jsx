import React from 'react';
import Input from "../../../base/input/Input";
import Button from "../../../base/button/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__container">
    <div className="login__heading">
      <h1>Elvator Game</h1>
    </div>
    <div className="login__formcontainer">
      <form autoComplete="off">
        <h2>Sign Up</h2>
        <Input
          type={"email" || "text"}
          placeholder="email / username"
          required="true"
          name="email"
        />
        <Input
          type="password"
          placeholder="password"
          required="true"
          name="password"
        />

        <Button type="submit" variant="submit" label="Login" />

        <div className="login__already">
          <span>Don't have a account create new?<NavLink className="login__link">Sign Up</NavLink></span>
        </div>
      </form>
    </div>
  </div>
    
  )
}

export default Login