import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-civic-tracker.onrender.com/"
});

// Attach token to every request
api.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default api;
