import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWZhZTk4OThlZGM0OTZmNjBhMGZkYSIsImlhdCI6MTcwNTI0MDk3OSwiZXhwIjoxNzA1MzI3Mzc5fQ.j3us-DKfGZZziWaSwnihz9auiexLweSPJdOQ_w5w4AI";

const axiosInstance = axios.create({
  baseURL: "https://magang-project-be.vercel.app/",
  headers: {
    accept: "application/json",
  },
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export default axiosInstance;
