import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

// ── Мероприятия ───────────────────────────────────────────
export const getEvents = (params) => api.get("/events", { params });
export const addEvent = (data) => api.post("/events", data);

// ── Педагоги ──────────────────────────────────────────────
export const getTeachers = () => api.get("/teachers");
export const addTeacher = (data) => api.post("/teachers", data);

// ── Отзывы ────────────────────────────────────────────────
export const getReviews = () => api.get("/reviews");
export const addReview = (data) => api.post("/reviews", data);

// ── Контакт ───────────────────────────────────────────────
export const sendContact = (data) => api.post("/contact", data); // ← ТОЛЬКО ЭТА ВЕРСИЯ

// URL для картинок
export const STATIC_URL = "http://localhost:3000";

export default api;
