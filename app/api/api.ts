import axios from "axios";

export const api = axios.create({
  baseURL: "https://notehub-helvita-api.onrender.com",
  withCredentials: true,
});
