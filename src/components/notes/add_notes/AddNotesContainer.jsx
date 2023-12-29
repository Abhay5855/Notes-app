import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import { CreateNotes } from "../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../redux/slice/notesSlice";

const AddNotesContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const loggedInUser = useSelector((state) => state.auth.userData);

  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserDetails(loggedInUser);
  }, [loggedInUser]);

  const showModal = () => {
    setIsModalOpen(true);
  };

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
      handleCancel();
      await CreateNotes(data, id);
      dispatch(fetchNotes(id));
      setTitle("");
      setContent("");
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
