import axios from "axios";
const url = `http://localhost:3000` as string;
axios.defaults.baseURL = url;

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
