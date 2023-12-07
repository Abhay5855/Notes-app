import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import Input from "../../base/input/Input";

const Editor = ({ title, onChange, content, setContent, onSubmit }) => {
  return (
    <div className="editor__content">
      <h2>Add Note</h2>

      <form action="" onSubmit={onSubmit}>
        <Input
          placeholder="Enter title"
          required={true}
          name="title"
          value={title}
          onChange={onChange}
        />
        <div className="editor__container">
          <ReactQuill
            theme="snow"
            name="content"
            value={content}
            onChange={setContent}
          />
        </div>
      </form>
    </div>
  );
};

export default Editor;
