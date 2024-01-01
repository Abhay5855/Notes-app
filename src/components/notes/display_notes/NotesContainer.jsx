import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { deleteSelected, fetchNotes } from "../../../redux/slice/notesSlice";
import { PinNotes, UnPinNotes, addToFavourite } from "../../../api/api";
import {
  convertHtmlToPlainText,
  copyTextToClipboard,
} from "../../../helpers/helper";
import { toast } from "react-toastify";

const NotesContainer = () => {
  const userId = useSelector((state) => state.auth.userData);

  const notesData = useSelector((state) => state.note.notesData);

  const searchedData = useSelector((state) => state.note.searchResults);

  const searchQuery = useSelector((state) => state.note.searchQuery);

  const { isLoading } = useSelector((state) => state.note);

  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();
  const [openPalette, setOpenPalette] = useState({});

  useEffect(() => {
    setId(userId._id);
  }, [id, userId]);

  useEffect(() => {
    if (searchQuery !== "") {
      setNotes(searchedData);
    } else {
      setNotes(notesData);
    }
  }, [notesData, notes, searchedData]);

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
      toast.success("Pinned note");
    } catch (err) {
      console.log(err);
      toast.error("Failed to pin the note");
    }
  };

  //Unpin the notes
  const handleUnPinnedNotes = async (noteId) => {
    try {
      await UnPinNotes(noteId);
      initData(id);
      toast.success("Unpinned note");
    } catch (err) {
      console.log(err);
      toast.error("Failed to unpin the note");
    }
  };

  //delete notes
  const handleDelete = (noteId) => {
    try {
      dispatch(deleteSelected({ userId: id, noteId }));
      toast.success("Notes deleted successfully");
      initData(id);
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete the notes");
    }
  };

  //handle copy
  const handleCopy = (title, content) => {
    try {
      const convertedText = convertHtmlToPlainText(content);
      const textToCopy = `${title}\n${convertedText}`;
      copyTextToClipboard(textToCopy);
      toast.success("Copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const handleOpenNote = (noteId) => {
    setOpenPalette((prev) => ({
      ...prev,
      [noteId]: !prev[noteId],
    }));
  };

  //add to favourites
  const handleAddToFavourites = async (noteId) => {
    try {
      await addToFavourite(noteId);
      initData(id);
      toast.success("Added to favourites");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add it to favourite");
    }
  };
  const handleRemoveFromFavourites = async (noteId) => {
    try {
      await addToFavourite(noteId);
      initData(id);
      toast.success("Removed from favourites");
    } catch (err) {
      console.log(err);
      toast.error("Failed to remove from favourite");
    }
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
        handleAddToFavourites={handleAddToFavourites}
        handleRemoveFromFavourites={handleRemoveFromFavourites}
      />
    </>
  );
};

export default NotesContainer;
