import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Navigation from "./components/Navigation";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import Landing from "../pages/Landing";
import PageNotFound from "./components/NotFound";
const isLoggedIn=useSelector((store) => store.auth.isLoggedIn);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<PageNotFound />,
    
    children: [
      {
        path: "/register",
        element: <Register/>,
        
      },
      {
        path: "/login",
        element: <Login/>,
        children: [
            {
            path:"landing",
            element:<Landing/>
            }
        ]

      }

    ],
  },
]);
export default router;