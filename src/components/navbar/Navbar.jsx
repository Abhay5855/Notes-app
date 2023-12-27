import React from "react";
import "./navbar.css";
import Search from "../../base/search/Search";
import logo from "../../assets/images/icon.png";
import { getInitials } from "../../helpers/helper";
import Dropdown from "../../base/dropdown/Dropdown";

const Navbar = ({
  userDetails,
  onLogout,
  handleOpen,
  isOpen,
  handleSelected,
}) => {
  return (
    <>
      <nav>
        <div className='nav__container'>
          <div className='nav__container1'>
            <div className='nav__logo'>
              <img src={logo} />
              <span>keep</span>
            </div>
            <div className='nav__search'>
              <Search />
            </div>
          </div>
          <div className='nav__container2'>
            <div className='nav__settings'>
              <span class='material-symbols-outlined'>settings</span>
            </div>

            <div className='nav__language' onClick={handleOpen}>
              <span class='material-symbols-outlined'>language</span>
            </div>
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
        {isOpen && <Dropdown handleSelected={handleSelected} />}
      </nav>
    </>
  );
};

export default Navbar;
