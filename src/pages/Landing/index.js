import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_pancard,
  get_all_sort_fixed_depo,
  get_all_sort_account_type,
} from "../../redux/actions/pan_actions";
import BankAccountsMap from "../../components/BankAccountsMap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import CardsShimmer from "../../components/CardsShimmer/CardsShimmer";
import classes from "./index.module.css";
import SharedHeader from "../../components/SharedHeader";

/**
 * Landing component displays users homepage after loggingin
 *
 * @returns {React.ReactElement}
 */

const Landing = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.pan.data);
  const [selected, setSelected] = useState({});
  const isLoading = useSelector((state) => state.pan.isLoading);
  const error = useSelector((state) => state.pan.isLoading);
  const [page, setPage] = useState(1);

  const handleSelect = (key, event) => {
    setSelected({ key, value: event.target.value });
  };
  useEffect(() => {
    dispatch(get_all_pancard(user?.pancard ? user["pancard"] : "LPIOM1234L"))
      .then((data) => {
        console.log("success");
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  useEffect(() => {
    if (selected === {} || selected.key === "None")
      dispatch(get_all_pancard(user?.pancard ? user["pancard"] : "LPIOM1234L"));

    if (selected.key === "FixedDeposits") {
      dispatch(get_all_sort_fixed_depo(user?.pancard ? user["pancard"] : "LPIOM1234L"));
      setTimeout(()=>{
          console.log(data)
      },600)
    }
    if (selected.key === "Account_Type: Salary") {
      dispatch(get_all_sort_account_type(user["pancard"], "Salary"));
    }
    if (selected.key === "Account_Type: Savings") {
      dispatch(get_all_sort_account_type(user["pancard"], "Savings"));
    }
    setPage(1);
  }, [selected]);

  const list = [
    { key: "Filter By" },
    { key: "None", value: "none" },
    { key: "FixedDeposits", value: "fixed_deposits" },
    { key: "Account_Type: Salary", value: "account_type:salary" },
    { key: "Account_Type: Savings", value: "account_type:savings" },
  ];

  let mapped = data?.slice(page * 10 - 10, page * 10).map((item) => {
    return <BankAccountsMap
        key={item._id}
        id={item._id}
        name={item.name}
        email={item.email}
        bankName={item.bankName}
        pancard={item.pancard}
        account_type={item.AccountType}
        fd={item.FixedDeposits}
        balance={item.Balance}
      />
    
  });
  const selectPageHandler = (page_i) => {
    if (
      page_i >= 1 &&
      page_i <= [...Array(Math.ceil(data.length / 10))].length &&
      page_i !== page
    )
      setPage(page_i);
  };
  return (
    <React.Fragment key="overallwrapper">
      {isLoading ? (
        <CardsShimmer key="cardshimmer"></CardsShimmer>
      ) : (
        <React.Fragment key="renderer">
          {error ? (
            <div key="errorrenderer">error</div>
          ) : (
            <React.Fragment key="mainrenderer">
              <SharedHeader name={user?.name} pancard={user?.pancard} key="ShareHeader"/>
              <div className="mb-4 a-section a-spacing-small mt-1 bg-light">
                <div className={classes["flex"]} key="flexwrapper">
                  <span key="pageresults">
                    {(page - 1) * 10 + 1}-
                    {Math.min((page - 1) * 10 + 10, data.length)} of over{" "}
                    {data.length} results for <span> </span>
                  </span>

                  <span key="pancardwarnig" className="text-warning" style={{ flex: "2" }}>
                    {" "}
                    "{user?.pancard}"
                  </span>
                  <span key="spandrop" className={classes["absolute"]}>
                    <DropdownButton
                      id="dropdown-basic-button"
                      key="dropdown-basic-button"
                      variant="secondary"
                      className="float-right"
                      style={{ marginRight: "25px" }}
                      onSelect={handleSelect}
                      data-testid="select-option"
                      size="sm"
                      title={selected?.key || list[0].key}
                    >
                      {list.map((item, index) => {
                        return (
                          <Dropdown.Item key={index} eventKey={item.key}>
                            {item.value}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                  </span>
                </div>
              </div>
              {data?.length > 0 ? (
                <React.Fragment key="pagination+cardss">
                  <div className={classes["cards"]} key="cardss" >{mapped}</div>
                  <div
                    className={classes["pagination"]}
                    key="pgination"
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
                      key="leftarrow"
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
                    key="rightarrow"
                      onClick={() => selectPageHandler(page + 1)}
                      className={
                        page < data.length / 10 ? "" : classes["disable_button"]
                      }
                    >
                      ▶
                    </span>
                  </div>
                </React.Fragment>
              ) : (
                <h5 className="text-center m-3 text-secondary" key="noaccountsfound">
                  Couldnt find any accounts .
                </h5>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Landing;
