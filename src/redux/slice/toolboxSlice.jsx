import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, COLORS } from "../../../utils/utility";

const initialState = {
  [MENU_ITEMS.PENCIL]: {
    color: COLORS.BLACK,
    size: 3,
  },
  [MENU_ITEMS.ERASER]: {
    color: COLORS.WHITE,
    size: 3,
  },
  [MENU_ITEMS.UNDO]: {},
  [MENU_ITEMS.REDO]: {},
  [MENU_ITEMS.DOWNLOAD]: {},
};

export const toolboxSlice = createSlice({
  name: "toolbox",
  initialState,

  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item] = {
        ...state[action.payload.item],
        color: action.payload.color,
      };
    },

    changeBrushSize: (state, action) => {
      state[action.payload.item] = {
        ...state[action.payload.item],
        size: action.payload.size,
      };
    },
  },
});

export const { changeBrushSize, changeColor } = toolboxSlice.actions;

export const toolboxSliceReducer = toolboxSlice.reducer;
