import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

/**
 * Navigation is a UI component that is used for navigation to pages
 *
 * @returns {React.ReactElement}
 */
const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    alert("userlogged out");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-dark bg-gradient navbar-static-top  ">
        <div className="container">
          <Link className="navbar-brand nav-link active" to="/">
            <span className="text-light">App</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  <span className="text-light">Home</span>
                </NavLink>
              </li>
              {!isLoggedIn && (
                <li className="nav-item ms-lg-3">
                  <NavLink className="nav-link active" to="/login">
                    <span className="text-light">Login</span>
                  </NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/register">
                    <span className="text-light">Register</span>
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/login/landing">
                    <span className="text-light">Landing</span>
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/login/flagged">
                    <span className="text-light">Flagged</span>
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={handleClick}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
