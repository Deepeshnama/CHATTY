import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000" 
      : "https://chatty-m1v2.onrender.com",
});
