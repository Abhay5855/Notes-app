import React from "react";
import Toolbox from "./Toolbox";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeBrushSize,
} from "../../../redux/slice/toolboxSlice";
import { MENU_ITEMS } from "../../../../utils/utility";

const ToolboxContainer = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.menu.activeMenuItem);
  const { size } = useSelector((state) => state.toolbox[selectedItem]);

  const handleBrushSize = (e) => {
    dispatch(changeBrushSize({ item: selectedItem, size: e.target.value }));
  };

  const handleChangeColor = (updatedColor) => {
    dispatch(changeColor({ item: selectedItem, color: updatedColor }));
  };

  const showStrokeOptions = selectedItem === MENU_ITEMS.PENCIL;
  const showBrushOptions =
    selectedItem === MENU_ITEMS.ERASER || selectedItem === MENU_ITEMS.PENCIL;

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
