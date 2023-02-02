import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get_one_id } from "../redux/actions/pan_actions";
import {useNavigate} from "react-router-dom"
import bank1 from "../assets/bank1.jpg";
import bank2 from "../assets/bank2.png";
import bank3 from "../assets/bank3.jpg";
import bank4 from "../assets/bank4.png";
import "./BankDetails.module.css";

const image_map = new Map([
  ["Bank1", bank1],
  ["Bank2", bank2],
  ["Bank3", bank3],
  ["Bank4", bank4],
]);
const BankDetails = () => {
  let { id } = useParams();
  //const dispatch = useDispatch();
  const Navigate=useNavigate();

  const isLoading = useSelector((state) => state.pan.isLoading);
//   useEffect(() => {
//     dispatch(get_one_id(id));
//   }, []);
  const dat = useSelector((state) => state.pan.data);
  let dat1=dat.filter((item)=> item._id===id)
  let data=dat1[0]

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {console.log(data)}
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
      <div class="container" style={{ "margin-top": "60px" }}>
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img
                      src={image_map.get(data.bankName)}
                      className="bank-image"
                    />
                  </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h2 class="primary-title mt-4 mb-2">{data.bankName}</h2>

                <h4>Your details associated with {data.bankName}</h4>
                <h6>Registerd Name:{data.name}</h6>

                <p >
                 <span className="mb-4"> <strong>Email:</strong> {data.email}</span>
                  <br />
                <span className="mb-2"><strong>FixedDeposits: </strong> </span>
                  {data.FixedDeposits}
                  <br />
                  <span className="mb-2">  <strong>Total balance:</strong> {data.Balance} </span>
                  <br />
                  <span className="mb-2"><strong>AccountType:</strong> {data.AccountType} </span>
                  <br />
                  <span className="mb-2"> <strong>AccountNumber: </strong> </span>
                  {data._id}
                </p>
                <h6>Pancard: {data.pancard}</h6>
                <button onClick={()=>{
                    Navigate('/login/landing');
                }}>return</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BankDetails;
