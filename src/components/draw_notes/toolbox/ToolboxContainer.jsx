import React from "react";
import Toolbox from "./Toolbox";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeBrushSize,
} from "../../../redux/slice/toolboxSlice";
import { MENU_ITEMS } from "../../../utils/utility";

const ToolboxContainer = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { size, color } = useSelector((state) => state.toolbox[activeMenuItem]);

  const handleBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const handleChangeColor = (updatedColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: updatedColor }));
  };

  const showStrokeOptions = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushOptions =
    activeMenuItem === MENU_ITEMS.ERASER ||
    activeMenuItem === MENU_ITEMS.PENCIL;

  return (
    <div>
      <Toolbox
        showBrushOptions={showBrushOptions}
        showStrokeOptions={showStrokeOptions}
        handleBrushSize={handleBrushSize}
        handleChangeColor={handleChangeColor}
        size={size}
      />
    </div>
  );
};

export default ToolboxContainer;
