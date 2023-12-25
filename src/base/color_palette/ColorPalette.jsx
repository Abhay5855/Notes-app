import React, { useState } from "react";
import "./colorPalette.css";

const ColorPalette = () => {
  const [colors, setColors] = useState([
    {
      id: Date.now(),
      color: "#77172e",
    },
    {
      id: Date.now(),
      color: "#692b17",
    },
    {
      id: Date.now(),
      color: "#7c4a03",
    },
    {
      id: Date.now(),
      color: "#264d3b",
    },
    {
      id: Date.now(),
      color: "#0c625d",
    },
    {
      id: Date.now(),
      color: "#4b443a",
    },
  ]);

  return (
    <>
      <div className='color__picker__container'>
        <div className='color__picker'>
          {colors.map((item) => (
            <div
              key={item.id}
              className='color__pick'
              style={{ backgroundColor: `${item.color}` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
