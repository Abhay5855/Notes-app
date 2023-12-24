import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import { CreateNotes, getNotes } from "../../../api/api";
import { useSelector } from "react-redux";

const AddNotesContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const loggedInUser = useSelector((state) => state.auth.userData);

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setUserDetails(loggedInUser);
  }, [loggedInUser]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = userDetails._id;
      const data = {
        title,
        content,
      };
      await CreateNotes(data, id);
      await getNotes(id);
      console.log("after creating notes");
      setTitle("");
      setContent("");
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      setTitle("");
      setContent("");
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
