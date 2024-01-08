import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__container">
        <ul>
          <li>
            <NavLink to="/home">
              <div>
                <span class="material-symbols-outlined">description</span>
                <h3 className="sidebar__labels">Notes</h3>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourite">
              <div>
                <span class="material-symbols-outlined">favorite</span>
                <h3 className="sidebar__labels">Favourite</h3>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/thrash">
              <div>
                <span class="material-symbols-outlined">
                  <span class="material-symbols-outlined">draw</span>
                </span>
                <h3 className="sidebar__labels">Sketch</h3>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tags">
              <div>
                <span class="material-symbols-outlined">sell</span>
                <h3 className="sidebar__labels">Tags</h3>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
