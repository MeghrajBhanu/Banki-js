import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_all_bankAccounts } from "../../redux/actions/pan_actions";
import image_map from "../../utils/images";
import classes from "./index.module.css";

const BankAllAccounts = () => {
  let { bankName } = useParams();
  console.log(bankName);
  let user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_bankAccounts(user["pancard"], bankName));

  }, []);
  const data = useSelector((state) => state.pan.data);
  const isLoading = useSelector((state) => state.pan.isLoading);
  let src = image_map[bankName];
  return (
    <>
      {!isLoading && (
        <>
          <div className={classes["wrap"]}>
            <div className={classes["_8MlDE"]}>
              <img className={classes["H5I6J"]} src={src} alt="bankName" />
              <div className={classes["content"]}>
                <h2 className={classes["text-lead"]}>{bankName}</h2>
                <p className={classes["second-text"]}>India</p>
                <p className={classes["second-text"]}>Hyderabad,Telangana</p>
              </div>

              <h3 className={classes["set"]}>
                Total Bank Accounts: {data?.length}
              </h3>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "seashell",
              width: "100%",
              height: "50px",
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ float: "right", margin: "1px" }}
            >
              Add Account
            </button>
          </div>
          <table class="table m-5">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#Account No</th>
                <th scope="col">Account Type</th>
                <th scope="col">Fixed Deposits</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => {
                return (
                  <tr>
                    <th scope="row">{item._id}</th>

                    <td>{item.AccountType}</td>
                    <td>{item.FixedDeposits}</td>
                    <td>{item.Balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
                    Add Account
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
                <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="mr-2" style={{marginRight:"20px"}}>Account-no: </i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                aria-label="account no"
                                name="account no"
                                //value={valuess.email}
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Account No"
                                // onChange={handleChange}
                                // onBlur={handleInputValidation}
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="mr-2"style={{marginRight:"10px"}} >Account Type: </i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                aria-label="Account type"
                                name="Account type"
                                //value={valuess.pancard}
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Account type"
                                // onChange={handleChange}
                                // onBlur={handleInputValidation}
                                required="required"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="mx-4">Balance: </i>

                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="Balance"
                                aria-label="Balance"
                                name="Balance"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Balance"
                                // value={valuess.password}
                                // onChange={handleChange}
                                // onBlur={handleInputValidation}
                                required="required"
                              />
                            </div>
                          </div>
                          
                        </form>

                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default BankAllAccounts;
