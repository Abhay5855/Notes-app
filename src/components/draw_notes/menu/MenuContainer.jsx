import React from "react";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { menuItemClick } from "../../../redux/slice/menuSlice";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const handleItemClick = (item) => {
    dispatch(menuItemClick(item));
  };
  return (
    <div>
      <Menu handleItemClick={handleItemClick} />
    </div>
  );
};

export default MenuContainer;
