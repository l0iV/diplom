import { useState, useEffect, useMemo } from "react";
import { getEvents, STATIC_URL } from "../../api/api";

const CATEGORIES = [
  { key: "all",     label: "Все события", emoji: "🌟" },
  { key: "ecology", label: "Экология",    emoji: "🌿" },
  { key: "art",     label: "Творчество",  emoji: "🎨" },
  { key: "holiday", label: "Праздники",   emoji: "🎉" },
  { key: "sport",   label: "Спорт",       emoji: "⚽" },
  { key: "health",  label: "Здоровье",    emoji: "💊" },
  { key: "other",   label: "Другое",      emoji: "📌" },
];

const BADGE = {
  ecology: "bg-green-100 text-green-700",
  art:     "bg-purple-100 text-purple-700",
  holiday: "bg-yellow-100 text-yellow-600",
  sport:   "bg-blue-100 text-blue-700",
  health:  "bg-red-100 text-red-700",
  other:   "bg-gray-100 text-gray-600",
};

export default function Events() {
  const [events, setEvents]             = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedEvent, setSelectedEvent]   = useState(null);
  const [searchQuery, setSearchQuery]       = useState("");

  useEffect(() => {
    getEvents()
      .then((res) => setEvents(res.data))
      .catch(() => setError("Не удалось загрузить мероприятия"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () =>
      events.filter((e) => {
        const matchCat    = activeCategory === "all" || e.category === activeCategory;
        const matchSearch =
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
      }),
    [events, activeCategory, searchQuery]
  );

  return (
    <section className="events-section flex flex-col items-center w-full gap-10">
      {/* Hero */}
      <div className="events-hero w-full bg-gradient-to-br from-green-100 via-emerald-50 to-fuchsia-100 flex flex-col items-center gap-[16px] h-[250px] justify-center">
        <h1 className="events-hero-title font-bold text-[40px] text-green-700">
          Новости и мероприятия
        </h1>
        <p className="events-hero-sub text-[18px] text-slate-500 text-center">
          Всё самое интересное, что происходит в нашем детском саду
        </p>
        <div className="events-search relative w-full max-w-[550px] px-4">
          <input
            type="text"
            placeholder="Найти мероприятие..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border-2 border-slate-200 bg-white p-[15px] text-[14px] shadow-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>
      </div>

      {/* Фильтры */}
      <div className="events-filters flex flex-wrap justify-center gap-2 px-4 w-full">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count =
            cat.key === "all"
              ? events.length
              : events.filter((e) => e.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-green-300 hover:text-green-600"
              }`}
            >
              {cat.emoji} {cat.label}
              <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[11px] ${isActive ? "bg-white/30" : "bg-slate-100"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Контент */}
      <div className="w-full max-w-[1200px] px-4 pb-10">
        {loading && (
          <p className="text-center text-slate-400 text-[16px] py-20">Загрузка...</p>
        )}
        {error && (
          <p className="text-center text-red-400 text-[16px] py-20">{error}</p>
        )}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-slate-400 text-[16px] py-20">Ничего не найдено</p>
        )}
        {!loading && !error && filtered.length > 0 && (
          <div className="events-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="flex flex-col rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {event.image_url && (
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={`${STATIC_URL}${event.image_url}`}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${BADGE[event.category] ?? BADGE.other}`}>
                      {CATEGORIES.find((c) => c.key === event.category)?.label ?? event.category}
                    </span>
                    <span className="text-[12px] text-slate-400">
                      {event.date_label ?? event.date}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-800">{event.title}</h3>
                  <p className="text-[13px] text-slate-500 line-clamp-3">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Модалка */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-2xl"
          >
            {selectedEvent.image_url && (
              <img
                src={`${STATIC_URL}${selectedEvent.image_url}`}
                alt={selectedEvent.title}
                className="w-full h-[260px] object-cover rounded-t-[28px]"
              />
            )}
            <div className="flex flex-col gap-3 p-6">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-500 hover:bg-white shadow"
              >
                ✕
              </button>
              <span className={`self-start rounded-full px-3 py-1 text-[12px] font-semibold ${(BADGE[selectedEvent.category] ?? BADGE.other)}`}>
                {CATEGORIES.find((c) => c.key === selectedEvent.category)?.label}
              </span>
              <h2 className="text-[22px] font-extrabold text-slate-800">{selectedEvent.title}</h2>
              <p className="text-[13px] text-slate-400">{selectedEvent.date_label ?? selectedEvent.date}</p>
              <p className="text-[15px] text-slate-600 leading-relaxed">{selectedEvent.description}</p>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 text-sm font-bold text-white hover:opacity-90 transition"
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
