import { useNavigate } from "react-router";
import "../pages/Landing/Landing.css";
import image_map from "../utils/images";
import classes from "../pages/Landing/Landing.module.css";
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
/**
 * BankAccountsMap  is a UI component that maps user bank account details
 *    in form of cards
 *
 * @returns {React.FunctionComponent}
 */

const BankAccountsMap =({
  id,
  name,
  email,
  pancard,
  account_type,
  fd,
  bankName,
  balance,
})=> {
  const Navigate = useNavigate();
  const handleId = (e) => {
    Navigate("/login/landing/" + id);
  };
    return(
        <div className={classes["card"]}>
          <img src={image_map[bankName]} />
          <div className={classes["card-body"]}>
          <span className="h6">{bankName}</span> -- <span className="h3-h">{account_type + " Account"}</span>
            <p> FixedDeposits: {fd}
            <br />
            Total balance: {balance}</p>
            
            <button className="btn btn-secondary" onClick={handleId}>
            View More
          </button>
          </div>
        </div>
    )
  }

export default BankAccountsMap;
