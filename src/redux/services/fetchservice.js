import axios from "axios";
import Cookie from "js-cookie";
const API_URL = "http://localhost:5000/api/v1";
let axiosConfig = {
  withCredentials: true,
};

const getToken = () => {
  return localStorage.getItem("token");
};

const get_all_pancard = async (pan) => {
  const token = getToken();
  return await axios.get(
    API_URL + "/pancard?panNum=" + pan,
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};
const get_all_sort_fixed_depo = async (pan) => {
  const token = getToken();
  return await axios.get(
    API_URL + "/pancard?panNum=" + pan + "&fixedDepo=true",
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};
const get_all_sort_account_type = async (pan, account_type) => {
  const token = getToken();
  return await axios.get(
    API_URL + "/pancard?panNum=" + pan + "&accounType=" + account_type,
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};

const get_one_id = async (id) => {
  const token = getToken();
  return await axios.get(
    API_URL + "/" + id,
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};
const get_all_bankAccounts = async (pan, bankName) => {
  const token = getToken();
  return await axios.get(
    API_URL + "/pancard/bank?panNum=" + pan + "&bankName=" + bankName,
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};
const get_all_flag_accounts = async (pan) => {
  const token = getToken();
  return await axios.get(
    API_URL + "/pancard/flagged?panNum=" + pan + "&isFlagged=true",
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};
const flag_account = async (id, isFlagged) => {
  const token = getToken();
  return await axios.patch(
    API_URL + "/pancard/patch?id=" + id + "&isFlagged=" + isFlagged,
    axiosConfig
  );
};
const create_account = async (obj) => {
  const token = getToken();
  return await axios.post(
    API_URL + "/pancard/create",
    obj,
    { headers: { Authorization: `Bearer ${token}` } },
    axiosConfig
  );
};

export default {
  get_all_pancard,
  get_one_id,
  get_all_sort_fixed_depo,
  get_all_sort_account_type,
  get_all_flag_accounts,
  get_all_bankAccounts,
  flag_account,
  create_account,
};
