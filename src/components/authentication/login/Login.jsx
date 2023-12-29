import React from "react";
import Input from "../../../base/input/Input";
import Button from "../../../base/button/Button";
import { NavLink } from "react-router-dom";
import "./login.css";
import logo from "../../../assets/images/icon.png";

const Login = ({
  onChange,
  onSubmit,
  validated,
  isDisabled,
  touched,
  formData,
  isInvalidMessage,
  isLoading,
}) => {
  return (
    <>
      <div className='login__container'>
        <div className='login__form'>
          <div className='login__heading'>
            <img src={logo} loading='lazy' alt='...' />
            <h1>WhizNotes</h1>
            <span>Remember everything important</span>
          </div>

          <form autoComplete='off' onSubmit={onSubmit}>
            <Input
              type='email'
              placeholder='Email'
              value={formData.email}
              required={true}
              name='email'
              onChange={onChange}
              feedbackMessage={
                touched.email || validated ? isInvalidMessage("email") : ""
              }
            />
            <Input
              type='password'
              placeholder='Password'
              value={formData.password}
              required={true}
              name='password'
              onChange={onChange}
              feedbackMessage={
                touched.password || validated
                  ? isInvalidMessage("password")
                  : ""
              }
            />
            <Button
              type='submit'
              variant='submit'
              label='Login'
              isDisabled={isDisabled}
              isLoading={isLoading}
            />
          </form>

          <div className='login__ending'>
            <p>Don't have an account?</p>
            <NavLink to='/register'>create account</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
