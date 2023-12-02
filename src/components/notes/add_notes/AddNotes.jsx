import React from "react";
import plus from "../../../assets/images/plus.svg";
import "./addnotes.css";

const AddNotes = () => {
  return (
    <>
      <div className="addnotes__container">
        <img src={plus} alt="plus" />
        <span>Add Notes</span>
      </div>
    </>
  );
};

export default AddNotes;
