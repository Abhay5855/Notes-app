import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../redux/slice/notesSlice";

const NotesContainer = () => {
  const userId = useSelector((state) => state.auth.userData);

  const notesData = useSelector((state) => state.note.notesData);

  const { isLoading } = useSelector((state) => state.note);

  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
  const [isPinned, setIsPinned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setId(userId._id);
  }, [id, userId]);

  useEffect(() => {
    setNotes(notesData);
  }, [notesData, notes]);

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
        isLoading={isLoading}
        notes={notes}
        isPinned={isPinned}
        handlePinnedNotes={handlePinnedNotes}
      />
    </>
  );
};

export default NotesContainer;
