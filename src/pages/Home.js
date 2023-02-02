import React from "react";
import { Link } from "react-router-dom";
import homeimage from "../assets/homeimage.jpg";
const Home = () => {
  return (
    <>
      <div className="container-fluid h-full " style={{ height: "100vh" }}>
        <img
          className=" container-fluid align-items-center"
          src={homeimage}
          style={{
            height: "100%",
            imageRendering: "-webkit-optimize-contrast",
          }}
          alt="managing people"
        ></img>
        <div className="h-full row w-100 align-items-center justify-content-center">
          <div className="col">
            <div className="row align-items-center">
              <div className="col-12 h3 text-center text-black mt-4">
                Welcome
              </div>

              <span className="lead-text text-center p-3 h5">
                We are a services group focused on providing customers{" "}
              </span>
              <br></br>
              <span className="lead-text text-center p-2 h5">
                with all there account details associated with different banks
                at a single point
              </span>
              <h6 className="text-center p-1">
                Don't have a account yet? <Link to="/register">Register</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;