import React from 'react'
import ReactDOM from 'react-dom/client'
import SignupContainer from './components/authentication/signup/SignupContainer.jsx';
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './routes/error-page.jsx';


// routing 

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupContainer />,
    errorElement : <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
