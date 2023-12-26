import React, { useRef, useState } from "react";
import "./colorPalette.css";
import { changeColor } from "../../api/api";

const ColorPalette = ({
  noteId,
  initData,
  userId,
  setOpenPalette,
  selectedColor,
}) => {
  const colorRef = useRef(null);
  const [isDivOpen, setIsDivOpen] = useState(true);
  const colors = [
    {
      id: 1,
      color: "#77172e",
    },
    {
      id: 2,
      color: "#692b17",
    },
    {
      id: 3,
      color: "#7c4a03",
    },
    {
      id: 4,
      color: "#264d3b",
    },
    {
      id: 5,
      color: "#0c625d",
    },
    {
      id: 6,
      color: "#4b443a",
    },
  ];

  const handleNoteColor = async (selectedColor) => {
    try {
      const data = {
        color: selectedColor,
      };
      await changeColor(noteId, data);
      setOpenPalette({});
      initData(userId);
    } catch (err) {
      console(err);
      setOpenPalette({});
    }
  };

  return (
    <>
      <div className='color__picker__container' ref={colorRef}>
        <div className='color__picker'>
          {colors.map((item) => (
            <>
              <div
                key={item.id}
                className='color__pick'
                style={{
                  backgroundColor: `${item.color}`,
                  cursor:
                    item?.color === selectedColor ? "not-allowed" : "pointer",
                }}
                onClick={
                  item.color === selectedColor
                    ? ""
                    : () => handleNoteColor(item?.color)
                }
              ></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
