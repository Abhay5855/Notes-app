import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../../../redux/slice/notesSlice";
import DisplayFavourite from "./DisplayFavourite";

const DisplayFavouriteContainer = () => {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userData);

  const notesData = useSelector((state) => state.note.notesData);

  const { isLoading } = useSelector((state) => state.note);

  useEffect(() => {
    setId(userId._id);
  }, [userId]);

  useEffect(() => {
    setNotes(notesData.filter((item) => item?.liked === true));
  }, [notesData]);

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
      <DisplayFavourite isLoading={isLoading} notes={notes} />
    </div>
  );
};

export default DisplayFavouriteContainer;
