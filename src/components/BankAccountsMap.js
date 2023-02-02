import {useState} from 'react'
import Modal from 'react-modal';
import { useNavigate } from 'react-router';
import "../pages/Landing.css"
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

const BankAccountsMap = ({
  id,
  name,
  email,
  pancard,
  account_type,
  fd,
  bankName,
  balance,
  
}) => {
    const Navigate=useNavigate();
    const [isOpen,setIsOpen]=useState(false)
    const handleId=(e)=>{
        
        openModal()
        Navigate("/login/landing/"+id)
    }
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
    
  return (
    <div className="bank-card" >
    {/*<div class="col-sm-3 mt-2 mb-2 mx-5 p-1" ></div>*/}
      
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        <button onClick={closeModal}>X</button>
        <h4>Your details associated with {bankName}</h4>
        <h6>Registerd Name:{name}</h6>

        <p>
            Email: {email}
            <br />
            FixedDeposits: {fd}
            <br />
            Total balance: {balance}
            <br />
            AccountType: {account_type}
            <br />
            AccountNumber: {id}
        </p>
        <h6>Pancard: {pancard}</h6>

        
      </Modal>
      
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{bankName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {account_type + " Account"}
          </h6>
          <p class="card-text ">
            FixedDeposits: {fd}
            <br />
            Total balance: {balance}
          </p>
          <button class="btn btn-secondary" onClick={handleId}>
                View More
          </button>
          
        </div>
      </div>
    </div>
  );
};
export default BankAccountsMap;
