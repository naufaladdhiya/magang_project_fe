import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWZhZTk4OThlZGM0OTZmNjBhMGZkYSIsImlhdCI6MTcwNDk2Mzc3NSwiZXhwIjoxNzA1MDUwMTc1fQ.4OgXAs7y4h0qheXj-OWlkICH6OmfMQDGFp1O-TkQxdE";

const axiosInstance = axios.create({
  baseURL: "https://magang-project-be.vercel.app/",
  headers: {
    accept: "application/json",
  },
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export default axiosInstance;
