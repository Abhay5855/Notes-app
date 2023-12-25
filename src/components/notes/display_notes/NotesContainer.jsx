import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { deleteSelected, fetchNotes } from "../../../redux/slice/notesSlice";
import { PinNotes, UnPinNotes } from "../../../api/api";
import {
  convertHtmlToPlainText,
  copyTextToClipboard,
} from "../../../helpers/helper";

const NotesContainer = () => {
  const userId = useSelector((state) => state.auth.userData);

  const notesData = useSelector((state) => state.note.notesData);

  const { isLoading } = useSelector((state) => state.note);

  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
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
      initData(id);
    }
  }, [id]);

  //pin-unpin notes
  const handlePinnedNotes = async (noteId) => {
    try {
      await PinNotes(noteId);
      initData(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnPinnedNotes = async (noteId) => {
    try {
      await UnPinNotes(noteId);
      initData(id);
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

  //handle copy

  const handleCopy = (title, content) => {
    try {
      const convertedText = convertHtmlToPlainText(content);
      const textToCopy = `${title}\n${convertedText}`;
      copyTextToClipboard(textToCopy);
    } catch (err) {}
  };

  return (
    <>
      <Notes
        isLoading={isLoading}
        notes={notes}
        handlePinnedNotes={handlePinnedNotes}
        handleDelete={handleDelete}
        handleUnPinnedNotes={handleUnPinnedNotes}
        handleCopy={handleCopy}
      />
    </>
  );
};

export default NotesContainer;
