import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import image_map from "../../utils/images";
import { flag_account } from "../../redux/actions/pan_actions";
import "./index.module.css";

const BankDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const isLoading = useSelector((state) => state.pan.isLoading);
  const dat = useSelector((state) => state.pan.data);
  let dat1 = dat.filter((item) => item._id === id);
  let data = dat1[0];
  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };
  // const [open1, setOpen1] = useState(false);

  // const onOpenModal1 = () => setOpen1(true);
  // const onCloseModal1 = () => setOpen1(false);
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
      {/* <Modal
        isOpen={open1}
        onRequestClose={onCloseModal1}
        style={customStyles}
        ariaHideApp={false}
      >
        <h6>Are you sure you want to flag this account?</h6>
        <span>
          <button onClick={handleModal}>Yes</button>
          <button onClick={onCloseModal1}>No</button>
        </span>
      </Modal> */}

      <div className="container" style={{ marginTop: "60px" }}>
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <img
                  src={image_map[data.bankName]}
                  className="bank-image"
                  alt="bankLogo"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="details col-md-6">
                <h2 className="primary-title mt-4 mb-2">{data.bankName}</h2>

                <h4>Your details associated with {data.bankName}</h4>
                <h6>Registerd Name:{data.name}</h6>

                <p>
                  <span className="mb-4">
                    <strong>Email:</strong> {data.email}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong>FixedDeposits: </strong>
                  </span>
                  {data.FixedDeposits}
                  <br />
                  <span className="mb-2">
                    <strong>Total balance:</strong> {data.Balance}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong>AccountType:</strong> {data.AccountType}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong>AccountNumber: </strong>
                  </span>
                  {data._id}
                </p>
                <h6>Pancard: {data.pancard}</h6>
                <div className="container mt-3">
                  <div className="row d-flex justify-content-space-between ">
                    <div className="col-lg-3 col-xl-4">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          Navigate("/login/landing");
                        }}
                      >
                        return
                      </button>
                    </div>
                    <div className="col-lg-3 col-xl-4">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Not Your Account?
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
