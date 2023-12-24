import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { useSelector } from "react-redux";
import { getNotes } from "../../../api/api";
const NotesContainer = () => {
  const userId = useSelector((state) => state.auth.userData);

  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setId(userId._id);
  }, [id, userId]);

  //getnotes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const result = await getNotes(userId._id);
        setNotes(result);
        console.log("Notes updated");
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [userId]);

  return (
    <>
      <Notes notes={notes} />
    </>
  );
};

export default NotesContainer;
