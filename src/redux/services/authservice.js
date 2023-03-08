import axios from "axios";
import Cookie from "js-cookie";
const API_URL = "http://localhost:5000/api/v1/auth/";
let headers = (authToken) => {
  return { Authorization: "Bearer " + authToken };
};
let axiosConfig = {
  withCredentials: true,
};
const register = async (obj) => {
  return await axios.post(API_URL + "register", obj, axiosConfig);
};

const login = async (obj) => {
  return await axios
    .post(API_URL + "login", obj, axiosConfig)
    .then((response) => {
      return response.data;
    });
};

const logout = async (token) => {
  return await axios
    .get(
      API_URL + "logout",
      { headers: { Authorization: `Bearer ${token}` } },
      axiosConfig
    )
    .then((res) => {
      Cookie.remove("token");
    });
};

export default {
  register,
  login,
  logout,
};
