import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../redux/slice/notesSlice";

const NotesContainer = () => {
  const userId = useSelector((state) => state.auth.userData);

  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
  const [isPinned, setIsPinned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setId(userId._id);
  }, [id, userId]);

  console.log(id, "this is id");

  //getnotes
  useEffect(() => {
    if (id) {
      dispatch(fetchNotes(id));
    }
  }, [id]);

  //pin-unpin notes

  const handlePinnedNotes = () => {
    try {
      setIsPinned(!isPinned);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Notes
        notes={notes}
        isPinned={isPinned}
        handlePinnedNotes={handlePinnedNotes}
      />
    </>
  );
};

export default NotesContainer;
