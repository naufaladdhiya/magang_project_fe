import axios from "axios";

export const BASE_URL = "https://magang-project-be.vercel.app";

export const authAxios = axios.create({
  baseURL: BASE_URL,
});
