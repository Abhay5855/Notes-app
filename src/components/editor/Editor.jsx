import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

const Editor = () => {
  return (
    <>
      <div className="editor__container">
        <ReactQuill theme="snow" />
      </div>
    </>
  );
};

export default Editor;
