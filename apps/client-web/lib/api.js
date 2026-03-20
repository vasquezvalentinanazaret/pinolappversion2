import axios from "axios";

const API = axios.create({
  baseURL: "https://TU-BACKEND.onrender.com/api"
});

export default API;
