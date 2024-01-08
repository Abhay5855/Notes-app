import React from "react";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { menuItemClick, actionItemClick } from "../../../redux/slice/menuSlice";

const MenuContainer = () => {
  const dispatch = useDispatch();

  //for brush and eraser
  const handleItemClick = (item) => {
    dispatch(menuItemClick(item));
  };

  const handleActionItemClick = (item) => {
    dispatch(actionItemClick(item));
  };

  return (
    <div>
      <Menu
        handleItemClick={handleItemClick}
        handleActionItemClick={handleActionItemClick}
      />
    </div>
  );
};

export default MenuContainer;
