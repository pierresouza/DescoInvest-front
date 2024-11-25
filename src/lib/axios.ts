import axios from "redaxios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});
