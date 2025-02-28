import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-m1v2.onrender.com/api",
});
