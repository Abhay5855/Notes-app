import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error-page.jsx";
import LoginContainer from "./components/authentication/login/LoginContainer";
import SignupContainer from "./components/authentication/signup/SignupContainer";
import NotesContainer from "./components/notes/display_notes/NotesContainer";
import AppLoadingContainer from "./AppLoadingContainer";

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <SignupContainer />,
    errorElement: <ErrorPage />,
  },
  {
    element: <AppLoadingContainer />,
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
