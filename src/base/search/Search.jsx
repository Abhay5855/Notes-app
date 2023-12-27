import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery, fetchSearchNotes } from "../../redux/slice/notesSlice";
import "./search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

    const query = e.target.value;
    dispatch(setSearchQuery(query !== "" ? query : ""));

    // Trigger search results fetch
    dispatch(fetchSearchNotes(query));
  };

  return (
    <div className='search__container'>
      <span class='material-symbols-outlined'>search</span>
      <input
        className='search__input'
        type='search'
        placeholder='Search'
        value={searchText}
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  );
};

export default Search;
