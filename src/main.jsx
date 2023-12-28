import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/404/error-page.jsx";
import LoginContainer from "./components/authentication/login/LoginContainer";
import SignupContainer from "./components/authentication/signup/SignupContainer";
import NotesContainer from "./components/notes/display_notes/NotesContainer";
import AppLoadingContainer from "./AppLoadingContainer";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProtectedRoute from "./routes/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import DisplayFavouriteContainer from "./components/notes/favourites/DisplayFavouriteContainer.jsx";
import { IntlProvider } from "react-intl";
import English from "../translate/en.json";
import French from "../translate/fr.json";
import Chinese from "../translate/ch.json";

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
        path: "/favourite",
        element: <DisplayFavouriteContainer />,
      },
      {
        path: "/tags",
        element: <h1>Tags</h1>,
      },
    ],
  },
]);

const MainContent = () => {
  const locale = useSelector((state) => state.language.selectedLanguage);

  const [messages, setMessages] = useState(English);

  function Message() {
    let message = English;
    if (locale === "en") {
      message = English;
    } else if (locale === "fr") {
      message = French;
    } else {
      message = Chinese;
    }

    return message;
  }

  return (
    <IntlProvider locale={locale} messages={Message()}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </IntlProvider>
  );
};

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MainContent />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
