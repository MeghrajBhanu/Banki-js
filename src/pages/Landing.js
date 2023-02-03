import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_pancard,get_all_sort_fixed_depo,get_all_sort_account_type } from "../redux/actions/pan_actions";
import BankAccountsMap from "../components/BankAccountsMap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import CardsShimmer from "../components/CardsShimmer";
import "./Landing.css";
const Landing = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.pan.data);
  console.log(data)
  const [selected, setSelected] = useState({});
  const isLoading=useSelector((state) => state.pan.isLoading);
  const handleSelect = (key, event) => {
    setSelected({ key, value: event.target.value });
  };
  useEffect(() => {
    
  
    dispatch(get_all_pancard(user["pancard"]))
    
  },[]
  )
  useEffect(() => {
    
    
    if(selected==={} || selected.key==="None")dispatch(get_all_pancard(user["pancard"]));
    
    if(selected.key==="FixedDeposits"){
      dispatch(get_all_sort_fixed_depo(user["pancard"]))
      
    }
    if(selected.key==="Account_Type: Salary"){

      dispatch(get_all_sort_account_type(user["pancard"],"Salary"))
    }
    if(selected.key==="Account_Type: Savings"){
      dispatch(get_all_sort_account_type(user["pancard"],"Savings"))
    }
    
  }, [selected]);
  
  
  
  const list = [
    {key:"Filter By"},
    { key: "None", value: "none" },
    { key: "FixedDeposits", value: "fixed_deposits" },
    { key: "Account_Type: Salary", value: "account_type:salary" },
    { key: "Account_Type: Savings", value: "account_type:savings"}
  ];

  let mapped = data?.map((item) => {
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
      ></BankAccountsMap>
    );
  });
  
  
    return(
    <React.Fragment>
      
      {isLoading?<CardsShimmer></CardsShimmer>:
      (
        <>
      <div class="a-section a-spacing-small mt-1 bg-light">
        <span>
          1-{data.length} of over {data.length} results for
        </span>
        <span> </span>
        <span className="text-warning">"{user.pancard}"</span>
        <span>
          <DropdownButton
            id="dropdown-basic-button"
            variant="secondary"
            className="float-right"
            onSelect={handleSelect}
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

      <h1 className="text-center m-1 text-secondary ">Welcome {user.name}</h1>
      <h6 className="text-center m-3 text-secondary">Here are your bank accounts linked with {user.pancard} </h6>
      {data?.length>0 ?<div class="wrapper-card">{mapped}</div>:<h5 className="text-center m-3 text-secondary">Couldnt find any accounts .</h5>}
</>)}
          
    </React.Fragment>
    );
          
          
};
export default Landing;
