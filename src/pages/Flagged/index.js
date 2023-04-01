import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_flag_accounts } from "../../redux/actions/pan_actions";
import BankAccountsMap from "../../components/BankAccountsMap";
import classes from "../Landing/index.module.css";
import SharedHeader from "../../components/SharedHeader";

/**
 * Flagged Page return All the flagged Accounts
 * @returns {React.ReactElement}
 */
const Flagged = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_flag_accounts(user?.pancard?user["pancard"]:"LTGWS1234L"));
  }, []);
  
  const data = useSelector((state) => state.pan.data);
  const [page, setPage] = useState(1);
  const selectPageHandler = (page_i) => {
    if (
      page_i >= 1 &&
      page_i <= [...Array(Math.ceil(data.length / 10))].length &&
      page_i !== page
    )
      setPage(page_i);
  };

  let mapped = data?.slice(page * 10 - 10, page * 10).map((item) => {
    return (
      <BankAccountsMap
        key={item._id}
        id={item._id}
        name={item.name}
        email={item.email}
        bankName={item.bankName}
        pancard={item.pancard}
        account_type={item.AccountType}
        fd={item.FixedDeposits}
        balance={item.Balance}
        flagged={true}
      ></BankAccountsMap>
    );
  });
  return (
    <>
    <div className="mb-4">
            <SharedHeader
              name={user?.name}
              pancard={user?.pancard}
              flagged={"flagged"}
            />
          </div>
      {data?.length > 0 ? (
        <>
          
          <div className={classes["cards"]}>{mapped}</div>
          {data.length > 10 && (
            <div
              className={classes["pagination"]}
              style={{
                padding: "10px",
                margin: "15px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => selectPageHandler(page - 1)}
                className={page > 1 ? "" : classes["disable_button"]}
              >
                ◀
              </span>

              {[...Array(Math.ceil(data.length / 10))].map((_, i) => {
                return (
                  <span
                    key={i}
                    className={page === i + 1 ? classes["selected"] : ""}
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              })}

              <span
                onClick={() => selectPageHandler(page + 1)}
                className={
                  page < data.length / 10 ? "" : classes["disable_button"]
                }
              >
                ▶
              </span>
            </div>
          )}
        </>
      ) : (
        <>
          <h5 className="text-center mb-5 mt-5">OOPS!!</h5>
          <h6 className="text-center ">There are no flagged accounts </h6>
        </>
      )}
    </>
  );
};
export default Flagged;
