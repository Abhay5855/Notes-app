import React from "react";
import "./signup.css";
import Input from "../../../base/input/Input";
import Button from "../../../base/button/Button";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/icon.png";
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
    <div className='signup__container'>
      <div className='signup__form'>
        <div className='signup__heading'>
          <img src={logo} />
          <h1>WhizNotes</h1>
        </div>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <Input
            type='email'
            placeholder='email'
            required={true}
            name='email'
            value={formData.email}
            onChange={handleChange}
            feedbackMessage={
              touched.email || validated ? isInvalidMessage("email") : ""
            }
          />
          <Input
            type='text'
            placeholder='First Name'
            required={true}
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            feedbackMessage={
              touched.firstName || validated
                ? isInvalidMessage("firstName")
                : ""
            }
          />
          <Input
            type='text'
            placeholder='Last Name'
            required={true}
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            feedbackMessage={
              touched.lastName || validated ? isInvalidMessage("lastName") : ""
            }
          />
          <Input
            type='password'
            placeholder='password'
            required={true}
            name='password'
            value={formData.password}
            onChange={handleChange}
            feedbackMessage={
              touched.password || validated ? isInvalidMessage("password") : ""
            }
          />

          <Button
            type='submit'
            variant='submit'
            label='Sign up'
            isDisabled={isDisabled}
          />
        </form>
        <div className='signup__ending'>
          <span>Already have a account ?</span>
          <NavLink to='/' className='signup__link'>
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
