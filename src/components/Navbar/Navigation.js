import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import  './Navigation.css';
import "react-toastify/dist/ReactToastify.css";
/**
 * Navigation is a UI component that is used for navigation to pages
 *
 * @returns {React.ReactElement}
 */
const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token)
  const [clicked,setClicked]=useState(false);

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const handleClick = (e) => {
    //e.preventDefault();
    setClicked(true)
    console.log(token)
    
    dispatch(logout(token));
    
    alert("User Logged out");
    
    navigate("/");
    
  };
  return (
    <>
      
      <nav className="navbar navbar-expand-md navbar-light bg-dark bg-gradient sticky-top">
        <div className="container">
          <Link className="navbar-brand nav-link" to="/">
            App
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
            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink className='nav-link' to="/">
                  Home
                </NavLink>
              </li>)}
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink className='nav-link' to="/login">
                    Login
                  </NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login/landing">
                    Landing
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login/flagged">
                    Flagged
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login/banks">
                    Banks
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={(e)=>{
                    
                    handleClick(e)

                  }}
                    >
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
