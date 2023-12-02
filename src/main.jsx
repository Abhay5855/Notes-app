import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error-page.jsx";
import App from "./App";
import LoginContainer from "./components/authentication/login/LoginContainer";
import SignupContainer from "./components/authentication/signup/SignupContainer";

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
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
