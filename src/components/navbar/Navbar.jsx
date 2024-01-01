import React from "react";
import "./navbar.css";
import Search from "../../base/search/Search";
import logo from "../../assets/images/icon.png";
import { getInitials } from "../../helpers/helper";
import { toast } from "react-toastify";

const Navbar = ({ userDetails, onLogout }) => {
  return (
    <>
      <nav>
        <div className='nav__container'>
          <div className='nav__container1'>
            <div className='nav__logo'>
              <img src={logo} loading='lazy' alt='...' />
              <span>keep</span>
            </div>
            <div className='nav__search'>
              <Search />
            </div>
          </div>
          <div className='nav__container2'>
            <div className='nav__profile'>
              <span>
                {getInitials(userDetails?.firstName, userDetails?.lastName)}
              </span>
            </div>

            <div onClick={onLogout}>
              <span className='nav__logout'>logout</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
