import React from "react";
import styles from "./toolbox.module.css";
import { COLORS } from "../../../utils/utility";
const Toolbox = ({
  showBrushOptions,
  showStrokeOptions,
  handleBrushSize,
  handleChangeColor,
  size,
}) => {
  return (
    <>
      <div className={styles.toolbox__container}>
        {showStrokeOptions && (
          <div className={styles.toolbox__color__contain}>
            <span>stroke color</span>
            <div className={styles.toolbox__colors}>
              <div
                onClick={() => handleChangeColor(COLORS.BLACK)}
                style={{ backgroundColor: `${COLORS.BLACK}` }}
              ></div>
              <div
                onClick={() => handleChangeColor(COLORS.WHITE)}
                style={{ backgroundColor: `${COLORS.WHITE}` }}
              ></div>
              <div
                onClick={() => handleChangeColor(COLORS.GREEN)}
                style={{ backgroundColor: `${COLORS.GREEN}` }}
              ></div>
              <div
                onClick={() => handleChangeColor(COLORS.BLUE)}
                style={{ backgroundColor: `${COLORS.BLUE}` }}
              ></div>
              <div
                onClick={() => handleChangeColor(COLORS.ORANGE)}
                style={{ backgroundColor: `${COLORS.ORANGE}` }}
              ></div>
              <div
                onClick={() => handleChangeColor(COLORS.RED)}
                style={{ backgroundColor: `${COLORS.RED}` }}
              ></div>
              <div
                onClick={() => handleChangeColor(COLORS.YELLOW)}
                style={{ backgroundColor: `${COLORS.YELLOW}` }}
              ></div>
            </div>
          </div>
        )}

        {showBrushOptions && (
          <div className={styles.toolbar__brush}>
            <span>brush size</span>
            <input
              type="range"
              min={1}
              max={10}
              value={size}
              onChange={handleBrushSize}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Toolbox;
