import React, { useEffect, useRef, useState } from "react";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { deleteSelected, fetchNotes } from "../../../redux/slice/notesSlice";
import { PinNotes, UnPinNotes } from "../../../api/api";
import {
  convertHtmlToPlainText,
  copyTextToClipboard,
} from "../../../helpers/helper";
import ToastPortal from "../../../base/toast/ToastPortal";
import { add } from "lodash";

const NotesContainer = () => {
  const userId = useSelector((state) => state.auth.userData);

  const notesData = useSelector((state) => state.note.notesData);

  const { isLoading } = useSelector((state) => state.note);

  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();
  const [openPalette, setOpenPalette] = useState({});

  const toastRef = useRef();

  const addToast = () => {
    toastRef.current.addMessage({
      mode: "success",
      message: "Note deleted Successfully",
    });
  };

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

  //Unpin the notes
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
      addToast();
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

  const handleOpenNote = (noteId) => {
    setOpenPalette((prev) => ({
      ...prev,
      [noteId]: !prev[noteId],
    }));
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
        handleOpenNote={handleOpenNote}
        openPalette={openPalette}
        initData={initData}
        userId={id}
        setOpenPalette={setOpenPalette}
      />
      <ToastPortal ref={toastRef} />
    </>
  );
};

export default NotesContainer;
