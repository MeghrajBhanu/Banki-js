import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const Navigate = useNavigate();
  const handleclick=()=>{
    Navigate('/login/landing');
  }
  return (
    <>
      <div className="py-5 my-5 container-fluid">
        <div className="row px-0 mt-3 align-content-center">
          <div className="card mx-auto" style={{ width: "25rem" }}>
            <h6 className="card-header">
              <h6>Sucessfull!</h6>
            </h6>
            <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "50px", textAlign: "center" }}></i>

            <div className="card-body">
              <h4 className="text-center">Successfull!</h4>
              <h4 className="text-center">Dear User,</h4>
              <h4 className="card-text text-center">Your Account has been flagged!</h4>
              <div className="mb-0 text-center">
                
                <p className="mb-0">We have sent a request to your bank for a revalidation,</p>
                <p className="mb-0">your details will be updated here in 3 days.</p>
                
              </div>
            </div>
            <div className="card-footer d-flex">
              
              <button className="btn btn-info rounded-pill w-100 ms-2 " onClick={handleclick}>
                Return 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}