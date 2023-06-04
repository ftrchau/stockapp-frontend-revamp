import axios from "axios";

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const proxyurl = "https://vue-http-demo-29666.web.app/";
// const endpoint = "https://query1.finance.yahoo.com/";
// const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:8080/"
//     : "https://ftrchau.github.io/stockapp-frontend-revamp/";

const api = axios.create({
  //   baseURL: "https://query1.finance.yahoo.com/",
  // baseURL: baseURL,
  // baseURL: proxyurl + endpoint,
  baseURL: "https://stockapp-backend-production.up.railway.app/stockapi/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => error.response.data
);

export default api;
