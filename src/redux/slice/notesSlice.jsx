import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNotes, deleteNotes, searchNotes, fetchImage } from "../../api/api";

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

export const fetchSearchNotes = createAsyncThunk(
  "note/searchNotes",
  async (query) => {
    const response = await searchNotes(query);

    return response;
  }
);

export const fetchNoteImage = createAsyncThunk(
  "note/fetchNoteImage",
  async (noteId) => {
    const response = await fetchImage(noteId);
    return { noteId, image: response.base64Image };
  }
);

const initialState = {
  isLoading: false,
  notesData: null,
  searchQuery: "",
  searchResults: null,
  selectedId: null,
  noteImages: {},
};

export const noteSlice = createSlice({
  name: "note",
  initialState,

  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setNoteImage: (state, action) => {
      const { noteId, image } = action.payload;
      state.noteImages[noteId] = image;
    },
  },
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
    builder.addCase(fetchSearchNotes.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSearchNotes.fulfilled, (state, action) => {
      state.isLoading = false;

      if (state.searchQuery === "") {
        state.searchResults = null;
      } else {
        state.searchResults = action.payload;
      }
    });

    builder.addCase(fetchSearchNotes.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchNoteImage.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Current state:", state);
      console.log("Action payload:", action.payload);
      const { noteId, image } = action.payload;
      state.noteImages = { ...state.noteImages, [noteId]: image };
    });

    builder.addCase(fetchNoteImage.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchNoteImage.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setSearchQuery, setSelectedId, setNoteImage } =
  noteSlice.actions;

export const noteSliceReducer = noteSlice.reducer;
