import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { create_account } from "../../redux/actions/createAccount";
import { clearMessage } from "../../redux/actions/message";
import { get_all_bankAccounts } from "../../redux/actions/pan_actions";
import image_map from "../../utils/images";
import classes from "./index.module.css";

/**
 * BankAllAccounts Page Shows all the Accounts user has in the particular bank.
 * @returns {React.FunctionComponent}
 */

const BankAllAccounts = () => {
  let { bankName } = useParams();
  const [errors, setError] = useState({ Balance: null, FixedDeposits: null });
  let user = useSelector((state) => state.auth.user);
  
  const { message } = useSelector((state) => state.message);
  const [valuess, setValues] = useState({
    AccountType: "",
    Balance: 500,
    FixedDeposits: 0,
  });
  useEffect(()=>{
    dispatch(clearMessage())
    
  },[])
  const handleInputValidation = (event) => {
    let message = "";
    if (event.target.name === "Balance") {
      if (event.target.value > 1000)
        message = "Balance should be less than 1000";
      else if (event.target.value === "") message = "Balance is required";
      else if (event.target.value < 500) message = "Minimum Balnce is 500";
      else message = null;
    }
    if (event.target.name === "FixedDeposits") {
      if (event.target.value > 5)
        message = "FixedDeposits should be less than 6";
      else if (event.target.value === "") message = "FixedDeposits is required";
      else if (event.target.value < 0)
        message = "FixedDeposits can't be Negative";
      else message = null;
    }
    
    setError((prev) => {
      return {
        ...prev,
        [event.target.name]: message,
      };
    });
  };
  const handleSubmit=()=>{
    dispatch(create_account({...valuess,pancard:user.pancard,name:user.name,bankName:bankName,email:user.email}))
    alert("Account created")
    }
  
  const handleChange = (e) => {
    if (e.target.name === "Salary" || e.target.name === "Savings") {
      setValues({ ...valuess, ["AccountType"]: e.target.value });
    } else {
      setValues({ ...valuess, [e.target.name]: e.target.value });
      handleInputValidation(e);
    }
  };
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
          <table class="table mt-4">
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
                    onClick={() => {
                      setValues({
                        AccountType: "",
                        Balance: 500,
                        FixedDeposits: 0,
                      });
                      setError({ Balance: null, FixedDeposits: null });
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="mr-2" style={{ marginRight: "10px" }}>
                        Account Type:{" "}
                      </i>

                      <div
                        aria-label="Account type"
                        name="Account type"
                        onChange={handleChange}
                      >
                        <input
                          type="radio"
                          value="Salary"
                          name="Salary"
                          checked={valuess.AccountType === "Salary"}
                        />{" "}
                        Salary
                        <span className="mx-3" />
                        <input
                          type="radio"
                          value="Savings"
                          name="Savings"
                          checked={valuess.AccountType === "Savings"}
                          defaultChecked
                        />{" "}
                        Savings
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="mx-4">Balance: </i>

                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          aria-label="Balance"
                          name="Balance"
                          id="form3Example4c"
                          className="form-control"
                          placeholder="Balance"
                          value={valuess.Balance}
                          onChange={handleChange}
                          onBlur={handleInputValidation}
                          required="required"
                        />
                      </div>
                    </div>
                    {errors.Balance !== null ? (
                      <div
                        className="text-danger mb-3"
                        style={{ marginLeft: "120px" }}
                      >
                        {errors.Balance}
                      </div>
                    ) : null}
                    <div className="d-flex flex-row align-items-center mb-3">
                      <i className="mr-2" style={{ marginRight: "20px" }}>
                        Fixed Deposits:{" "}
                      </i>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          aria-label="FixedDeposits"
                          name="FixedDeposits"
                          value={valuess.FixedDeposits}
                          id="form3Example3c"
                          className="form-control"
                          placeholder="FixedDeposits"
                          onChange={handleChange}
                          onBlur={handleInputValidation}
                          required="required"
                        />
                      </div>
                    </div>
                    {errors.FixedDeposits !== null ? (
                      <div
                        className="text-danger mb-3"
                        style={{ marginLeft: "120px" }}
                      >
                        {errors.FixedDeposits}
                      </div>
                    ) : null}
                  </form>
                </div>
                
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setValues({
                        AccountType: "",
                        Balance: 500,
                        FixedDeposits: 0,
                      });
                      setError({ Balance: null, FixedDeposits: null });
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit}
                  >
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
