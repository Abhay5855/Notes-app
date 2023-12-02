import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search__container">
      <span class="material-symbols-outlined">search</span>
      <input className="search__input" type="search" placeholder="Search" />
    </div>
  );
};

export default Search;
