import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});

// ── Мероприятия ───────────────────────────────────────────────────
export const getEvents = (params) => api.get("/events", { params });
export const addEvent = (data) => api.post("/events", data);

// ── Педагоги ─────────────────────────────────────────────────────
export const getTeachers = () => api.get("/teachers");
export const addTeacher = (data) => api.post("/teachers", data);

// ── Отзывы ───────────────────────────────────────────────────────
export const getReviews = () => api.get("/reviews");
export const addReview = (data) => api.post("/reviews", data);

// ── Контакт ──────────────────────────────────────────────────────
export const sendContact = (data) => api.post("/contact", data);
