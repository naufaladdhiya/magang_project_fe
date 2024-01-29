import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWZhZTk4OThlZGM0OTZmNjBhMGZkYSIsImlhdCI6MTcwNjUwMzkyOSwiZXhwIjoxNzA2NTkwMzI5fQ.B_FS7up01JOo4Qj6YnXLYbBUFFO5yVuGrJ0y1IygVeg";
const axiosInstance = axios.create({
  baseURL: "https://magang-project-be.vercel.app/",
  headers: {
    accept: "application/json",
  },
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export default axiosInstance;
