import React from "react";
import "./navbar.css";
import Search from "../../base/search/search";
import logo from "../../assets/images/icon.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="nav__container1">
            <div className="nav__logo">
              <img src={logo} />
              <span>keep</span>
            </div>
            <div className="nav__search">
              <Search />
            </div>
          </div>
          <div className="nav__container2">
            <div className="nav__settings">
              <span class="material-symbols-outlined">settings</span>
            </div>

            <div className="nav__list">
              {/* <span class="material-symbols-outlined">dns</span> */}
              <span class="material-symbols-outlined">grid_view</span>
            </div>

            <div className="nav__profile">
              <span>AP</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
