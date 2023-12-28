import React from "react";
import "./dropdown.css";
import { languages } from "../../utils/utils";

const Dropdown = ({ handleClose, handleSelected }) => {
  return (
    <div>
      <div className='dropdown__container'>
        <div className='dropdown__list'>
          {languages?.map((item) => (
            <div
              key={item?.id}
              className='dropdown__items'
              onClick={() => handleSelected(item?.value)}
            >
              <div>{item?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
