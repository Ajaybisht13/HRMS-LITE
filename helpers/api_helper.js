import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.API_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["tenant"] = "root";

axios.interceptors.request.use(async function (config) {
  return config;
}, function (error) {
  return Promise.reject(error)
});

axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    let message;
    if (error.response) {
      switch (error.response.status) {
        case 500:
          message = "Internal Server Error";
          break;
        case 401:
          message = "Please enter valid credentials";
          break;
        case 404:
          message = "Sorry! the data you are looking for could not be found";
          break;
        default:
          message = error.message || error;
      }
    }
    return Promise.reject(message);
  }
);

const setAuthorization = (token) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

class APIClient {
  get = (url, params) => {
    return axios.get(url, params);
  };
  create = (url, data) => {
    return axios.post(url, data);
  };
  post = (url, data) => {
    return axios.post(url, data);
  };
  update = (url, data) => {
    return axios.put(url, data);
  };
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };
}

const getLoggedinUser = () => {
  const user = null;
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, setAuthorization, getLoggedinUser };