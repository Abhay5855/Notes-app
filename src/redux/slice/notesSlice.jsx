import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNotes, deleteNotes } from "../../api/api";

export const fetchNotes = createAsyncThunk(
  "note/fetchNotes",
  async (userId) => {
    const response = await getNotes(userId);

    return response;
  }
);

export const deleteSelected = createAsyncThunk(
  "note/deleteNotes",
  async ({ userId, noteId }) => {
    await deleteNotes(userId, noteId);
  }
);

const initialState = {
  isLoading: false,
  notesData: null,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notesData = action.payload;
    });

    builder.addCase(fetchNotes.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteSelected.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteSelected.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(deleteSelected.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const noteSliceReducer = noteSlice.reducer;
