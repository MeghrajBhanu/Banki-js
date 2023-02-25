import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";
let axiosConfig = {
  withCredentials: true,
}
const get_all_pancard = async(pan) => {
  return await axios.get(API_URL + "/pancard?panNum="+pan,axiosConfig);
};
const get_all_sort_fixed_depo = async(pan) => {
  return await axios.get(API_URL + "/pancard?panNum="+pan+"&fixedDepo=true",axiosConfig);
};
const get_all_sort_account_type = async(pan,account_type) => {
  return await axios.get(API_URL + "/pancard?panNum="+pan+"&accounType="+account_type,axiosConfig);
};


const get_one_id = async(id) => {
    return await axios.get(API_URL + "/"+id,axiosConfig);
  };
const get_all_bankAccounts = async(pan,bankName) => {
    return await axios.get(API_URL + "/pancard/bank?panNum="+pan+"&bankName="+bankName,axiosConfig);
  };
const get_all_flag_accounts=async(pan)=>{
    return await axios.get(API_URL + "/pancard/flagged?panNum="+pan+"&isFlagged=true",axiosConfig);
  }
const flag_account=async(id,isFlagged)=>{
  return await axios.patch(API_URL + "/pancard/patch?id="+id+"&isFlagged="+isFlagged,axiosConfig);
}
const create_account=async(obj)=>{
  return await axios.post(API_URL + "/pancard/create",obj,axiosConfig);
}

export default {
    get_all_pancard,
    get_one_id,
    get_all_sort_fixed_depo,
    get_all_sort_account_type,
    get_all_flag_accounts,
    get_all_bankAccounts,
    flag_account,
    create_account,
}
