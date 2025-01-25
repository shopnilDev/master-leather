import axios from "axios";
import { BASE_URL } from "./BASE_URL";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`, // Use the proxy path
  withCredentials: true, // This allows sending cookies or credentials
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "multipart/form-data",
  },
});

export default axiosInstance;
