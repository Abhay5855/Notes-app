import React, { useState } from "react";
import AddNotes from "./AddNotes";

const AddNotesContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //showmodal
  const showModal = () => {
    setIsModalOpen(true);
  };

  //cancel the modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  console.log({ title, content });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title, content });

    try {
      setTitle("");
      setContent("");
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <AddNotes
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleSubmit}
        handleCancel={handleCancel}
        title={title}
        content={content}
        onChange={handleChange}
        setContent={setContent}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddNotesContainer;
