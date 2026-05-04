import axios from "axios";

// В продакшене берём URL из переменной окружения Vite
// В разработке — localhost
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
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

// ── Награды ────────────────────────────────────────────────
export const getWins = () => api.get("/wins");

// ── Кабинеты (бывшие новости) ─────────────────────────────
export const getRooms = () => api.get("/rooms"); // ЗАМЕНИЛИ getNews на getRooms

// ── Отзывы ────────────────────────────────────────────────
export const getReviews = (params) => api.get("/reviews", { params });
export const postReview = (data) => api.post("/reviews", data);

// ── Контакт ───────────────────────────────────────────────
export const sendContact = (data) => api.post("/contact", data);

// URL для картинок (без /api)
export const STATIC_URL =
  import.meta.env.VITE_STATIC_URL || "http://localhost:3000";

export default api;
