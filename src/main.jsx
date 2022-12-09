import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import ErrorPage from './error-page';
import Contact from './routes/contact';
import Root, { loader as rootLoader } from "./routes/root";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [{
      path: "contacts/:contactid",
      element: <Contact />
    }]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
