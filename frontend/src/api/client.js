import axios from "axios";
import { getToken } from "../utils/token.js";

const client = axios.create({
  baseURL: "http://localhost:4000/api",
});

client.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
