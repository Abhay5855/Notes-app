import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__container">
        <ul>
          <li>
            <NavLink to="/notes">
              <div>
                <span class="material-symbols-outlined">description</span>
                <h3 className="sidebar__labels">Notes</h3>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/archive">
              <div>
                <span class="material-symbols-outlined">archive</span>
                <h3 className="sidebar__labels">Archive</h3>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/thrash">
              <div>
                <span class="material-symbols-outlined">delete</span>
                <h3 className="sidebar__labels">Thrash</h3>
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
