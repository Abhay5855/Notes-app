import React from "react";
import styles from "./toolbox.module.css";
import { colors } from "../../../../utils/utility";
import { useSelector } from "react-redux";
import { MENU_ITEMS } from "../../../../utils/utility";

const Toolbox = () => {
  const selectedItem = useSelector((state) => state.menu.activeMenuItem);

  const showStrokeOptions = selectedItem === MENU_ITEMS.PENCIL;
  const showBrushOptions =
    selectedItem === MENU_ITEMS.ERASER || selectedItem === MENU_ITEMS.PENCIL;

  return (
    <>
      <div className={styles.toolbox__container}>
        {showStrokeOptions && (
          <div className={styles.toolbox__color__contain}>
            <span>stroke color</span>
            <div className={styles.toolbox__colors}>
              {colors.map((item) => (
                <div
                  key={item.id}
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
              ))}
            </div>
          </div>
        )}

        {showBrushOptions && (
          <div className={styles.toolbar__brush}>
            <span>brush size</span>
            <input type="range" />
          </div>
        )}
      </div>
    </>
  );
};

export default Toolbox;
