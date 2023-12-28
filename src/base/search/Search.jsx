import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery, fetchSearchNotes } from "../../redux/slice/notesSlice";
import "./search.css";
import { useIntl } from "react-intl";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

    const query = e.target.value;
    dispatch(setSearchQuery(query !== "" ? query : ""));

    // // Trigger search results fetch
    dispatch(fetchSearchNotes(query));
  };
  const intl = useIntl();

  const placeholder = intl.formatMessage({ id: "app.search.placeholder" });

  return (
    <div className='search__container'>
      <span class='material-symbols-outlined'>search</span>
      <input
        className='search__input'
        type='search'
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  );
};

export default Search;
