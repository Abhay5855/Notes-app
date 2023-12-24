import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { deleteSelected, fetchNotes } from "../../../redux/slice/notesSlice";
import { PinNotes } from "../../../api/api";

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

  const initData = (id) => {
    dispatch(fetchNotes(id));
  };
  useEffect(() => {
    if (id) {
      initData();
    }
  }, [id]);

  //pin-unpin notes
  const handlePinnedNotes = async (noteId) => {
    try {
      setIsPinned(!isPinned);
      await PinNotes(noteId);
    } catch (err) {
      console.log(err);
    }
  };

  //delete notes
  const handleDelete = (noteId) => {
    try {
      dispatch(deleteSelected({ userId: id, noteId }));
      initData(id);
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
        handleDelete={handleDelete}
      />
    </>
  );
};

export default NotesContainer;
