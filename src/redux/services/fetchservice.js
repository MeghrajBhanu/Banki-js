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


const get_one_id = async(id) => {
    return await axios.get(API_URL + "/"+id,axiosConfig);
  };

export default {
    get_all_pancard,
    get_one_id,
    get_all_sort_fixed_depo
}
