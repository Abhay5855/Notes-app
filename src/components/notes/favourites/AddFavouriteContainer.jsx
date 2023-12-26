import React, { useState, useEffect } from "react";
import AddFavourite from "./AddFavourite";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../redux/slice/notesSlice";

const AddFavouriteContainer = () => {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userData);

  const notesData = useSelector((state) => state.note.notesData);

  const { isLoading } = useSelector((state) => state.note);

  useEffect(() => {
    setId(userId._id);
  }, [id, userId]);

  useEffect(() => {
    setNotes(notesData);
  }, [notesData, notes]);

  const initData = (id) => {
    dispatch(fetchNotes(id));
  };
  useEffect(() => {
    if (id) {
      initData(id);
    }
  }, [id]);

  return (
    <div>
      <AddFavourite isLoading={isLoading} notes={notes} />
    </div>
  );
};

export default AddFavouriteContainer;
