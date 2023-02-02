import axios from "axios";
import Cookie from 'js-cookie'
const API_URL = "http://localhost:5000/api/v1/auth/";
let axiosConfig = {
  withCredentials: true,
}
const register = (obj) => {
  return axios.post(API_URL + "register", obj,axiosConfig);
};

const login = (obj) => {
  return axios
    .post(API_URL + "login", obj,axiosConfig)
    .then((response) => {
      return response.data;
      
    });

};

const logout = () => {
  return axios.get(API_URL+"logout").then((res)=>{
    console.log(res);
    Cookie.remove('token');
  });
};

export default {
  register,
  login,
  logout,
};