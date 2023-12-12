import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/404/error-page.jsx";
import LoginContainer from "./components/authentication/login/LoginContainer";
import SignupContainer from "./components/authentication/signup/SignupContainer";
import NotesContainer from "./components/notes/display_notes/NotesContainer";
import AppLoadingContainer from "./AppLoadingContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProtectedRoute from "./routes/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

// routings
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute path="/register">
        <SignupContainer />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLoadingContainer />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <NotesContainer />,
      },
      {
        path: "/thrash",
        element: <h1>Thrash</h1>,
      },
      {
        path: "/archive",
        element: <h1>Archieve</h1>,
      },
      {
        path: "/tags",
        element: <h1>Tags</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
