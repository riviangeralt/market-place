import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_HOST + "/api";

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 500) {
    } else if (error.response?.status === 403) {
    } else if (error.response?.status === 404) {
    } else if (error.response?.status === 400) {
    } else if (error.response?.status === 409) {
    } else if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
