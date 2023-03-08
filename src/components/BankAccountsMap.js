import { useNavigate } from "react-router";
import image_map from "../utils/images";
import classes from "../pages/Landing/index.module.css";
import { useDispatch } from "react-redux";
import { flag_account } from "../redux/actions/pan_actions";

/**
 * BankAccountsMap  is a UI component that maps user bank account details
 *    in form of cards
 * @params
 * @returns {React.FunctionComponent}
 */

const BankAccountsMap = ({
  id,
  name,
  email,
  pancard,
  account_type,
  fd,
  bankName,
  balance,
  flagged=false,
}) => {
  const Navigate = useNavigate();
  const dispatch=useDispatch();
  const handleId = (e) => {
    if(!flagged)Navigate("/login/landing/" + id);
    else{
      dispatch(flag_account(id,false));
      Navigate("/unflagged");
    }
  };
  return (
    
    <div className={classes["card"]}>
      <img src={image_map[bankName]} alt="bankLogo" />
      <div className={classes["card-body"]}>
        <div className="text-center">
        <span className="h6 ">{bankName}</span>
        <span > --</span>
        <span className="h3-h" >{account_type + " Account"}</span>
        </div>
        <p className="text-center">
          FixedDeposits: {fd}
          <br />
          Total balance: {balance}
        </p>
        <button className="btn btn-secondary" onClick={handleId} style={{marginLeft:"95px"}}>
          {flagged?"UnFlag":"View More"}
        </button>
      </div>
    </div>
  );
};

export default BankAccountsMap;
