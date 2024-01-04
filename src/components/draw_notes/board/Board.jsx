import React, { useRef, useEffect } from "react";

const Board = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  return <canvas ref={canvasRef} id='canvas'></canvas>;
};

export default Board;
