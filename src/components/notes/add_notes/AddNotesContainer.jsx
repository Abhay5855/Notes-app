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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const id = userDetails._id;
      const data = {
        title,
        content,
      };
      await CreateNotes(data, id);
      await getNotes(id);
      setTitle("");
      setContent("");
      handleCancel();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setTitle("");
      setContent("");
      handleCancel();
      setLoading(false);
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
        isLoading={loading}
      />
    </div>
  );
};

export default AddNotesContainer;
