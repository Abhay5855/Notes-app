import React from "react";

import styles from "./menu.module.css";

import { MENU_ITEMS } from "../../../../utils/utility";

const Menu = ({ handleItemClick, handleActionItemClick }) => {
  return (
    <div className={styles.menu__container}>
      <div
        className={styles.menu__items}
        onClick={() => handleItemClick(MENU_ITEMS.PENCIL)}
      >
        <span class="material-symbols-outlined">edit</span>
      </div>
      <div
        className={styles.menu__items}
        onClick={() => handleItemClick(MENU_ITEMS.ERASER)}
      >
        <span class="material-symbols-outlined">ink_eraser</span>
      </div>
      <div
        className={styles.menu__items}
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
      >
        <span class="material-symbols-outlined">undo</span>
      </div>
      <div
        className={styles.menu__items}
        onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
      >
        <span class="material-symbols-outlined">redo</span>
      </div>
    </div>
  );
};

export default Menu;
