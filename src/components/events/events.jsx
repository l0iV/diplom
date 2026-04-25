import { useState, useMemo } from "react";
import events_data from "./listEvents/listEvents";
const CATEGORIES = [
  { key: "all", label: "Все события", emoji: "🌟" },
  { key: "ecology", label: "Экология", emoji: "🌿" },
  { key: "art", label: "Творчество", emoji: "🎨" },
  { key: "holiday", label: "Праздники", emoji: "🎉" },
  { key: "sport", label: "Спорт", emoji: "⚽" },
  { key: "health", label: "Здоровье", emoji: "💊" },
  { key: "other", label: "Другое", emoji: "📌" },
];

const CATEGORY_STYLE = {
  ecology: { badge: "bg-green-100 text-green-700" },
  art: { badge: "bg-purple-100 text-purple-700" },
  holiday: { badge: "bg-yellow-100 text-yellow-700" },
  sport: { badge: "bg-blue-100 text-blue-700" },
  health: { badge: "bg-red-100 text-red-700" },
  other: { badge: "bg-gray-100 text-gray-600" },
};

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ ИСПРАВЛЕНО: используем events_data
  const filtered = useMemo(
    () =>
      events_data.filter((e) => {
        const matchCat =
          activeCategory === "all" || e.category === activeCategory;
        const matchSearch =
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
      }),
    [activeCategory, searchQuery],
  );

  return (
    <section className="events-section flex flex-col items-center w-full gap-10">
      <div className="events-hero w-full bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] flex flex-col items-center gap-[16px] h-[250px] justify-center">
        <div className="flex items-center gap-3">
          <h1 className="events-hero-title font-bold text-[40px] text-green-700">
            Новости и мероприятия
          </h1>
        </div>
        <p className="events-hero-sub text-[18px] text-slate-500 text-center">
          Всё самое интересное, что происходит в нашем детском саду
        </p>
        <div className="events-search relative w-full max-w-[550px]">
          <input
            type="text"
            placeholder="Найти мероприятие..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border-2 border-slate-200 bg-white p-[15px] text-[14px] shadow-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>
      </div>
      <div className="events-filters flex flex-wrap justify-center gap-2 px-4 w-full">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count =
            cat.key === "all"
              ? events_data.length
              : events_data.filter((e) => e.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1.5 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-200
                ${
                  isActive
                    ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-200 -translate-y-0.5"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5"
                }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${isActive ? "bg-white/25 text-white" : "bg-slate-100 text-slate-500"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-sm text-slate-400 -mt-4">
        {filtered.length === 0
          ? "Ничего не найдено"
          : `Показано ${filtered.length} из ${events_data.length} мероприятий`}
      </p>
      <div className="events-grid grid grid-cols-3 gap-6 max-w-[75%]">
        {filtered.map((event) => {
          const cat = CATEGORIES.find((c) => c.key === event.category);
          const s = CATEGORY_STYLE[event.category] || CATEGORY_STYLE.other;
          return (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="events-card group flex flex-col rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="events-card-img relative h-48 overflow-hidden">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm ${s.badge}`}
                >
                  {cat?.emoji} {cat?.label}
                </span>
              </div>
              <div className="events-card-body flex flex-col gap-2 p-5 flex-1">
                <p className="flex items-center gap-1 text-xs text-slate-400">
                  📅 {event.date_label}
                </p>
                <h3 className="text-base font-bold text-slate-800 leading-snug">
                  {event.title}
                </h3>
                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {event.description}
                </p>
                <button className="mt-2 w-full rounded-full border-2 border-blue-400 py-1.5 text-sm font-semibold text-blue-500 transition-all hover:bg-blue-500 hover:text-white">
                  Читать подробнее →
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          className="animate-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-modal events-modal relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-3xl bg-white"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 hover:bg-slate-200 transition"
            >
              ✕
            </button>
            <div className="events-modal-img h-64 overflow-hidden rounded-t-3xl shrink-0">
              <img
                src={selectedEvent.image_url}
                alt={selectedEvent.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-8">
              <span
                className={`self-start rounded-full px-3 py-1 text-xs font-bold ${CATEGORY_STYLE[selectedEvent.category]?.badge || CATEGORY_STYLE.other.badge}`}
              >
                {
                  CATEGORIES.find((c) => c.key === selectedEvent.category)
                    ?.emoji
                }{" "}
                {
                  CATEGORIES.find((c) => c.key === selectedEvent.category)
                    ?.label
                }
              </span>
              <h2 className="text-2xl font-extrabold text-slate-800">
                {selectedEvent.title}
              </h2>
              <p className="text-xs text-slate-400">
                📅 {selectedEvent.date_label}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {selectedEvent.description}
              </p>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-sm font-bold text-white hover:opacity-90 transition"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
