import axios from "axios";
const customAxios = axios.create({
  baseURL: "https://api.fri7a.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export { customAxios };
