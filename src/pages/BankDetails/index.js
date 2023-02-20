import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import image_map from "../../utils/images";
import "./index.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BankDetails = () => {
  let { id } = useParams();
  //const dispatch = useDispatch();
  const Navigate = useNavigate();

  const isLoading = useSelector((state) => state.pan.isLoading);
  //   useEffect(() => {
  //     dispatch(get_one_id(id));
  //   }, []);
  const dat = useSelector((state) => state.pan.data);
  let dat1 = dat.filter((item) => item._id === id);
  let data = dat1[0];
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      <Modal
        isOpen={open}
        onRequestClose={onCloseModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <button onClick={onCloseModal}>X</button>
        <h4>Dear user,</h4>
        <h6>we have sent a requst to your bank for a revalidation</h6>
        <h6>your details will be updated in 3 days</h6>
      </Modal>
      {/*
      <div className={classes["container"]}>
        <img
          src={image_map.get(data.bankName)}
          className={classes["bank-image"]}
        />
        <section>
          <h1>{data.bankName}</h1>
        </section>
      </div>
  */}
      <div className="container" style={{ "marginTop": "60px" }}>
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
                    "object-fit": "cover",
                    
                  }}
                />
              </div>
              <div className="details col-md-6">
                <h2 className="primary-title mt-4 mb-2">{data.bankName}</h2>

                <h4>Your details associated with {data.bankName}</h4>
                <h6>Registerd Name:{data.name}</h6>

                <p>
                  <span className="mb-4">
                    {" "}
                    <strong>Email:</strong> {data.email}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong>FixedDeposits: </strong>{" "}
                  </span>
                  {data.FixedDeposits}
                  <br />
                  <span className="mb-2">
                    {" "}
                    <strong>Total balance:</strong> {data.Balance}{" "}
                  </span>
                  <br />
                  <span className="mb-2">
                    <strong>AccountType:</strong> {data.AccountType}{" "}
                  </span>
                  <br />
                  <span className="mb-2">
                    {" "}
                    <strong>AccountNumber: </strong>{" "}
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
                      <button onClick={onOpenModal}>Not Your Account?</button>
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
