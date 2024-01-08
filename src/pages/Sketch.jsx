import React from "react";
import MenuContainer from "../components/draw_notes/menu/MenuContainer";
import ToolboxContainer from "../components/draw_notes/toolbox/ToolboxContainer";
import BoardContainer from "../components/draw_notes/board/BoardContainer";

const Sketch = () => {
  return (
    <>
      <MenuContainer />
      <ToolboxContainer />
      <BoardContainer />
    </>
  );
};

export default Sketch;
