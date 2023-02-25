import * as React from "react";
import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Navigation from "./Navigation";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import Landing from "../pages/Landing";
import PageNotFound from "./NotFound";
import BankDetails from "../pages/BankDetails";
import BankAllAccounts from "../pages/BankAllAccounts";
import Flagged from "../pages/Flagged";
import Banks from "../pages/Banks";
import Modal from "./Modal/Modal";
import Modal1 from "./Modal/Modal1";

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const ProtectRoute = ({ children, redirect = "/" }) => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={redirect} replace={true}></Navigate>;
  }
  return children;
};
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
        children: [
          {
            path: "landing",
            element: (
              <ProtectRoute>
                <Landing />
              </ProtectRoute>
            ),
          },
        ],
      },
      {
        path: "/login/landing/:id",
        element: (
          <ProtectRoute>
            <BankDetails />
          </ProtectRoute>
        ),
      },
      {
        path: "/success",
        element: (
          <ProtectRoute>
            <Modal />
          </ProtectRoute>
        ),
      },
      {
        path: "/unflagged",
        element: (
          <ProtectRoute>
            <Modal1 />
          </ProtectRoute>
        ),
      },
      {
        path: "/login/flagged",
        element: (
          <ProtectRoute>
            <Flagged />
          </ProtectRoute>
        ),
      },
      {
        path: "/login/banks",
        element: (
          <ProtectRoute>
            <Banks />
          </ProtectRoute>
        ),
        children: [
          {
            path: ":bankName",
            element: (
              <ProtectRoute>
                <BankAllAccounts/>
              </ProtectRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
