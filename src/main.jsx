import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/404/error-page.jsx";
import LoginContainer from "./components/authentication/login/LoginContainer";
import SignupContainer from "./components/authentication/signup/SignupContainer";
const NotesContainer = lazy(() =>
  import("./components/notes/display_notes/NotesContainer")
);
const DisplayFavouriteContainer = lazy(() =>
  import("./components/notes/favourites/DisplayFavouriteContainer.jsx")
);

import AppLoadingContainer from "./AppLoadingContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProtectedRoute from "./routes/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Loader from "./base/loader/Loader.jsx";
import Sketch from "./pages/Sketch.jsx";
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
    element: <SignupContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sketch",
    element: (
      <ProtectedRoute>
        <Sketch />
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
        element: (
          <Suspense fallback={Loader}>
            <NotesContainer />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/thrash",
        element: <h1>Thrash</h1>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/favourite",
        element: (
          <Suspense fallback={Loader}>
            <DisplayFavouriteContainer />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/tags",
        element: <h1>Tags</h1>,
        errorElement: <ErrorPage />,
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
