import React, { useRef, useEffect, useLayoutEffect } from "react";
import Board from "./Board";
import { useSelector, useDispatch } from "react-redux";
import { MENU_ITEMS } from "../../../utils/utility";
import { actionItemClick } from "../../../redux/slice/menuSlice";
import { uploadNote } from "../../../api/api";
const BoardContainer = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const historyDraw = useRef([]);
  const historyPointer = useRef(0);
  const dispatch = useDispatch();

  const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  const selectedNoteId = useSelector((state) => state.note.selectedId);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    if (
      actionMenuItem === MENU_ITEMS.UNDO ||
      actionMenuItem === MENU_ITEMS.REDO
    ) {
      if (historyPointer.current > 0 && actionMenuItem === MENU_ITEMS.UNDO) {
        historyPointer.current -= 1;
      }
      if (
        historyPointer.current < historyDraw.current.length - 1 &&
        actionMenuItem === MENU_ITEMS.REDO
      ) {
        historyPointer.current += 1;
      }
      const imageData = historyDraw.current[historyPointer.current];

      if (imageData) {
        context.putImageData(imageData, 0, 0);
      }
    } else if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
      const URL = canvas.toDataURL();
      const anchor = document.createElement("a");
      anchor.href = URL;
      anchor.download = "sketch.jpg";
      anchor.click();
    }
    dispatch(actionItemClick(null));
  }, [actionMenuItem, dispatch]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    const changeConfig = () => {
      context.strokeStyle = color;
      context.lineWidth = size;
    };

    changeConfig();
  }, [color, size]);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown = async (e) => {
      shouldDraw.current = true;
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    };
    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    };
    const handleMouseUp = async (e) => {
      shouldDraw.current = false;
      //Capture the canvas height and width
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      //push the context into the array
      historyDraw.current.push(imageData);

      //we want the last pointer
      historyPointer.current = historyDraw.current.length - 1;

      const body = {
        base64Image: canvas.toDataURL(),
      };

      await uploadNote(selectedNoteId, body);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div>
      <Board canvasRef={canvasRef} />
    </div>
  );
};

export default BoardContainer;
