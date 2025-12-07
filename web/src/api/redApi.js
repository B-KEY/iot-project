import axios from "axios";

const instance = axios.create({
  baseURL: "/redApi",
});

export default instance;
