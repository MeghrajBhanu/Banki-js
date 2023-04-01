import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import image_map from "../../utils/images";
import { flag_account } from "../../redux/actions/pan_actions";
import "./index.module.css";
/**
 * BankDetails page shows the all the details of a particular Account
 * @returns {React.FunctionComponent}
 */
const BankDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const isLoading = useSelector((state) => state.pan.isLoading);
  const dat = useSelector((state) => state.pan.data);
  let dat1 = dat.filter((item) => item._id === id);
  let data = dat1[0];
  const handleModal = () => {
    dispatch(flag_account(id, true));
    Navigate("/success");
  };
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Attention!
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to flag this account?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleModal}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "90px" }}>
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <img
                  src={image_map[data?.bankName]}
                  className="bank-image"
                  alt="bankLogo"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="details col-md-6">
                <h2 className="primary-title mt-4 mb-2" style={{marginLeft:"10px"}}>{data?.bankName}</h2>

                <h4 style={{marginLeft:"10px"}}>Your details associated with {data?.bankName}</h4>
                <h6 style={{marginLeft:"10px"}}>Registerd Name:{data?.name}</h6>

                <p  style={{marginLeft:"10px"}}>
                  <span className="mb-4">
                    <strong className="text-info">Email: </strong> {data?.email}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong className="text-info">FixedDeposits: </strong>
                  </span>
                  {data?.FixedDeposits}
                  <br />
                  <span className="mb-2">
                    <strong className="text-info">Total balance: </strong> {data?.Balance}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong className="text-info">AccountType: </strong> {data?.AccountType}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong className="text-info">AccountNumber: </strong>
                  </span>
                  {data?._id}
                </p>
                <h6 className="mb-5" style={{marginLeft:"10px"}}>Pancard: {data?.pancard}</h6>
                <div className="container mt-3">
                  <div className="row d-flex justify-content-space-around align-items-space-between">
                    <div className="col-lg-3 col-xl-4">
                      <button
                        className="btn btn-primary mb-2"
                        onClick={() => {
                          Navigate("/login/landing");
                        }}
                      >
                        Return
                      </button>
                    </div>
                    <div className="col-lg-3 col-xl-4">
                      <button
                        className="btn btn-primary "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Not your account?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BankDetails;
