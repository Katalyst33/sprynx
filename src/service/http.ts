import axios from "axios";
const url = `http://localhost:5300/api` as string;
axios.defaults.baseURL = url;

// get token from local storage
const isAuth = localStorage.getItem("id-card") as string;

// add token to request header
if (isAuth) {
  axios.defaults.headers.common["id-card"] = isAuth;
}

axios.interceptors.response.use(
  (response) => {
    // Alert message if present
    if (response.data) {
      // $alert.success(res.data.message);
      //   alert("api  was succfull");
    }

    return response.data;
  },
  (e) => {
    // Alert message if present
    if (e.response && e.response.data && e.response.data.error) {
      // $alert.error(e.response.data.error);
    }

    return Promise.reject(e);
  }
);

export { axios as $axios };
