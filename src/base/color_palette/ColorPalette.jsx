import React, { useRef } from "react";
import "./colorPalette.css";
import { changeColor } from "../../api/api";
import { colors } from "../../utils/utility";

const ColorPalette = ({
  noteId,
  initData,
  userId,
  setOpenPalette,
  selectedColor,
}) => {
  const colorRef = useRef(null);

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
      <div className="color__picker__container" ref={colorRef}>
        <div className="color__picker">
          {colors?.map((item) => (
            <>
              <div
                key={item?.id}
                className="color__pick"
                style={{
                  backgroundColor: `${item?.color}`,
                  cursor:
                    item?.color === selectedColor ? "not-allowed" : "pointer",
                }}
                onClick={
                  item?.color === selectedColor
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
