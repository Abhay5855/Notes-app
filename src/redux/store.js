import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slice/authSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { noteSliceReducer } from "./slice/notesSlice";
import { toolboxSliceReducer } from "./slice/toolboxSlice";
import { menuSliceReducer } from "./slice/menuSlice";

const persistConfig = {
  key: "persist-key",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSliceReducer,
  note: noteSliceReducer,
  toolbox: toolboxSliceReducer,
  menu: menuSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
