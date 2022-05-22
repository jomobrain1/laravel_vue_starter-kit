import axios from "axios";
import auth from "./store/auth";
import router from "./router";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api"
  })

  axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${auth.state.user.token}`
    return config;
  })

  export default axiosClient;
