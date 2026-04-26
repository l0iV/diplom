import { useState } from "react";
import baby from "../../assets/baby.png";
import menuData from "./groupList/groupList";
import officialDocuments from "./groupList/infoList";
import SliderReviews from "../sliderParentsReviews/sliderReviews";

/* ─── FAQ ────────────────────────────────────── */
const FAQ = [
  {
    q: "Во сколько начинается и заканчивается рабочий день?",
    a: "Детский сад работает с понедельника по пятницу с 07:00 до 19:00. Просим забирать детей не позднее 18:45.",
  },
  {
    q: "Что делать, если ребёнок заболел?",
    a: "Позвоните в детский сад до 08:00 и предупредите воспитателя группы. После болезни необходима справка от педиатра.",
  },
  {
    q: "Какие документы нужны при поступлении?",
    a: "Свидетельство о рождении ребёнка, паспорт родителя, медицинская карта (форма 026/у), направление из управления образования.",
  },
  {
    q: "Платное ли питание?",
    a: "Питание частично оплачивается родителями. Точный размер родительской платы устанавливается ежегодно администрацией учреждения.",
  },
  {
    q: "Можно ли забрать ребёнка в середине дня?",
    a: "Да. Сообщите воспитателю заранее. Для посторонних лиц необходима доверенность от родителей.",
  },
  {
    q: "Есть ли дополнительные кружки и секции?",
    a: "Да! Рисование, лепка, музыка, физкультура — всё включено в программу. Следите за расписанием на сайте.",
  },
];

/* ─── Советы психолога ───────────────────────── */
const TIPS = [
  {
    icon: "📅",
    title: "Начинайте заранее",
    text: "За 2–3 недели подстройте режим дня ребёнка: подъём в 7:00, дневной сон в 13:00.",
  },
  {
    icon: "🕐",
    title: "Короткие расставания",
    text: "Первые дни оставляйте на 1–2 часа. Постепенно увеличивайте. Всегда прощайтесь — не исчезайте!",
  },
  {
    icon: "🗣️",
    title: "Говорите позитивно",
    text: "Рассказывайте о саде как о месте где интересно и весело. Читайте книжки о детском саде.",
  },
  {
    icon: "🧸",
    title: "Любимая игрушка",
    text: "Разрешите взять небольшую игрушку — она даёт психологическую опору в новой обстановке.",
  },
  {
    icon: "🤗",
    title: "Ритуал прощания",
    text: "Придумайте «секретный» ритуал: особое рукопожатие, поцелуй в нос. Снижает тревогу у обоих.",
  },
  {
    icon: "💬",
    title: "Расспрашивайте вечером",
    text: "«Что было вкусно?», «С кем играл?» — конкретные вопросы помогают осмыслить день.",
  },
];

/* ─── Шкафчик ────────────────────────────────── */
const CHECKLIST = [
  { emoji: "👟", label: "Сменная обувь (чешки или кроссовки)" },
  { emoji: "👕", label: "Сменная одежда (минимум 2 комплекта)" },
  { emoji: "🥿", label: "Тапочки для помещения" },
  { emoji: "🛌", label: "Пижама для дневного сна" },
  { emoji: "🧴", label: "Влажные салфетки" },
  { emoji: "🪥", label: "Зубная щётка и паста" },
  { emoji: "🧴", label: "Крем (в холодное время года)" },
  { emoji: "🎒", label: "Мешок для сменки с подписью" },
];

/* ─── Контакты ───────────────────────────────── */
const CONTACTS_INFO = [
  {
    role: "Заведующая",
    name: "Иванова Елена Викторовна",
    phone: "8 (48753) 2-31-92",
    hours: "Пн–Пт 08:00–17:00",
    emoji: "👩‍💼",
  },
  {
    role: "Медсестра",
    name: "Петрова Светлана Ивановна",
    phone: "8 (48753) 2-31-93",
    hours: "Пн–Пт 07:30–14:00",
    emoji: "🩺",
  },
  {
    role: "Охрана / вахта",
    name: "Круглосуточно",
    phone: "8 (48753) 2-31-94",
    hours: "Ежедневно 24/7",
    emoji: "🔐",
  },
];

/* ─── Аккордеон (исправлен) ─────────────────── */
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-[16px] px-[20px] py-[16px]"
          >
            <span className="text-[14px] font-semibold text-slate-800 sm:text-[16px]">
              {item.q}
            </span>
            <span
              className={`shrink-0 text-[24px] text-blue-400 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[160px]" : "max-h-0"}`}
          >
            <p className="px-[20px] pb-[20px] text-[14px] leading-relaxed text-slate-500">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Модалка «Задать вопрос» ────────────────── */
function QuestionModal({ open, onClose }) {
  const [val, setVal] = useState({ name: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
      setVal({ name: "", phone: "", msg: "" });
    }, 2500);
  };
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-[16px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[448px] rounded-[24px] bg-white p-[32px]"
      >
        <button
          onClick={onClose}
          className="absolute right-[16px] top-[16px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
        >
          ✕
        </button>
        <h3 className="mb-[4px] text-[20px] font-extrabold text-slate-800">
          Задать вопрос руководству
        </h3>
        <p className="mb-[20px] text-[14px] text-slate-400">
          Ответим в течение рабочего дня
        </p>
        {sent ? (
          <div className="flex items-center justify-center rounded-[16px] bg-green-50 border border-green-200 py-[32px] text-center font-bold text-green-700">
            ✅ Сообщение отправлено!
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-[12px]">
            {[
              { key: "name", ph: "Ваше имя", type: "text" },
              { key: "phone", ph: "Телефон или email", type: "text" },
            ].map(({ key, ph, type }) => (
              <input
                key={key}
                type={type}
                required
                placeholder={ph}
                value={val[key]}
                onChange={(e) => setVal({ ...val, [key]: e.target.value })}
                className="rounded-[12px] border border-slate-200 bg-slate-50 px-[16px] py-[10px] text-[14px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
              />
            ))}
            <textarea
              required
              rows={4}
              placeholder="Ваш вопрос..."
              value={val.msg}
              onChange={(e) => setVal({ ...val, msg: e.target.value })}
              className="rounded-[12px] border border-slate-200 bg-slate-50 px-[16px] py-[10px] text-[14px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition resize-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 py-[12px] text-[14px] font-bold text-white hover:opacity-90 transition"
            >
              Отправить вопрос 📨
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ГЛАВНЫЙ КОМПОНЕНТ
═══════════════════════════════════════════════ */
export default function Parents() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    birthDate: "",
    group: "",
  });
  const [openMenu, setOpenMenu] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("form");

  const handleInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const scrollTo = (key) => {
    setActiveSection(key);
    document
      .getElementById(`section-${key}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NAV = [
    { key: "form", label: "📝 Заявка" },
    { key: "menu", label: "🍽️ Меню" },
    { key: "adapt", label: "🧸 Адаптация" },
    { key: "docs", label: "📄 Документы" },
    { key: "faq", label: "❓ FAQ" },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-[30px] bg-white">
      <QuestionModal
        open={questionOpen}
        onClose={() => setQuestionOpen(false)}
      />

      <div className="w-full flex flex-col items-center bg-gradient-to-br from-green-100 via-emerald-50 to-fuchsia-100 p-[50px]">
        <div className="flex flex-col items-center gap-[32px] w-full">
          <div className="flex flex-col items-center gap-[16px] w-full">
            <h1 className="text-[45px] text-green-700 font-extrabold  leading-tight text-center">
              Уважаемые родители!
            </h1>
            <p className="text-[16px] text-slate-700">
              Здесь вы найдёте всё, что нужно знать о жизни вашего ребёнка в
              детском саду
            </p>
            <button
              onClick={() => setQuestionOpen(true)}
              className="flex items-center gap-[8px] rounded-full bg-blue-500 px-[24px] py-[12px] text-[14px] font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              💬 Задать вопрос руководству
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="flex gap-[4px] w-full items-center justify-center p-[20px]">
          {NAV.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={` rounded-full text-[15px] font-semibold transition-all p-[12px]
                ${activeSection === key ? "bg-blue-500 text-white shadow-md" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div
        id="section-form"
        className="w-full flex flex-col items-center py-[56px] px-[16px] sm:px-[24px] bg-white"
      >
        <div className="flex flex-col items-center gap-[32px] w-full max-w-[768px]">
          <div className="flex flex-col items-center gap-[12px]">
            <h2 className="text-[28px] font-extrabold sm:text-[30px] bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Подача заявки в детский сад
            </h2>
            <p className="text-[14px] text-slate-400">
              Заполните форму — мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <div className="flex flex-col gap-[24px] w-full rounded-[24px] bg-white border border-slate-100 p-[24px] shadow-xl sm:p-[40px]">
            {submitted && (
              <div className="flex items-center justify-center rounded-[16px] bg-green-50 border border-green-200 px-[20px] py-[16px] text-[14px] font-semibold text-green-700">
                ✅ Заявка успешно отправлена! Ожидайте звонка.
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-[16px] sm:grid-cols-2"
            >
              {[
                {
                  name: "parentName",
                  placeholder: "ФИО родителя",
                  type: "text",
                  required: true,
                },
                {
                  name: "phone",
                  placeholder: "Телефон",
                  type: "tel",
                  required: true,
                },
                {
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                  required: false,
                },
                {
                  name: "childName",
                  placeholder: "ФИО ребёнка",
                  type: "text",
                  required: true,
                },
              ].map(({ name, placeholder, type, required }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleInput}
                  required={required}
                  className="w-full rounded-[16px] border border-slate-200 bg-slate-50 px-[16px] py-[12px] text-[14px] outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100"
                />
              ))}
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInput}
                required
                className="w-full rounded-[16px] border border-slate-200 bg-slate-50 px-[16px] py-[12px] text-[14px] text-slate-600 outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100"
              />
              <select
                name="group"
                value={formData.group}
                onChange={handleInput}
                className="w-full rounded-[16px] border border-slate-200 bg-slate-50 px-[16px] py-[12px] text-[14px] text-slate-600 outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100"
              >
                <option value="">Выберите группу</option>
                <option value="yasli">Ясли (1.5–3 года)</option>
                <option value="mladshaya">Младшая (3–4 года)</option>
                <option value="srednyaya">Средняя (4–5 лет)</option>
                <option value="starshaya">Старшая (5–6 лет)</option>
                <option value="podgotovitelnaya">
                  Подготовительная (6–7 лет)
                </option>
              </select>
              <div className="col-span-1 flex items-start gap-[12px] sm:col-span-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-[2px] h-[16px] w-[16px] shrink-0 cursor-pointer accent-green-500"
                />
                <label
                  htmlFor="consent"
                  className="text-[12px] leading-relaxed text-slate-500 cursor-pointer"
                >
                  Согласен(на) на обработку персональных данных в соответствии с{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="col-span-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500 py-[14px] text-[14px] font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:col-span-2"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="section-menu" className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-[32px] w-full max-w-[896px]">
          <div className="flex flex-col items-center gap-[8px]">
            <h2 className="text-[28px] font-extrabold text-blue-800 sm:text-[30px]">
              Примерное 20-дневное меню
            </h2>
            <p className="text-[14px] text-blue-400">
              Нажмите на группу, чтобы посмотреть меню
            </p>
          </div>
          <div className="flex flex-col gap-[12px] w-full">
            {menuData.map((group) => (
              <div
                key={group.key}
                className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === group.key ? null : group.key)
                  }
                  className="flex w-full items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 px-[20px] py-[16px] transition hover:from-green-100 hover:to-teal-100"
                >
                  <span className="text-[16px] font-bold text-slate-800 sm:text-[18px]">
                    {group.name}
                  </span>
                  <span
                    className="text-slate-400 text-[14px] transition-transform duration-300"
                    style={{
                      transform:
                        openMenu === group.key
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openMenu === group.key && (
                  <div className="flex flex-col max-h-[384px] overflow-y-auto border-t border-green-100 p-[16px] gap-[12px]">
                    {group.days.map((day) => (
                      <div
                        key={day.day}
                        className="flex flex-col gap-[12px] rounded-[16px] bg-slate-50 p-[16px] shadow-sm"
                      >
                        <p className="text-[14px] font-bold text-green-600">
                          📅 День {day.day}
                        </p>
                        <div className="grid grid-cols-2 gap-[8px] sm:grid-cols-4">
                          {[
                            {
                              label: "🍳 Завтрак",
                              value: day.breakfast,
                              border: "border-amber-400",
                              text: "text-amber-600",
                            },
                            {
                              label: "🍲 Обед",
                              value: day.lunch,
                              border: "border-orange-400",
                              text: "text-orange-600",
                            },
                            {
                              label: "🥛 Полдник",
                              value: day.afternoonSnack,
                              border: "border-pink-400",
                              text: "text-pink-600",
                            },
                            {
                              label: "🍽️ Ужин",
                              value: day.dinner,
                              border: "border-purple-400",
                              text: "text-purple-600",
                            },
                          ].map(({ label, value, border, text }) => (
                            <div
                              key={label}
                              className={`flex flex-col gap-[4px] rounded-[12px] bg-white p-[12px] border-l-4 ${border}`}
                            >
                              <p
                                className={`text-[12px] font-semibold ${text}`}
                              >
                                {label}
                              </p>
                              <p className="text-[12px] text-slate-600 leading-relaxed">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="section-adapt"
        className="w-full bg-white flex flex-col items-center gap-[50px]"
      >
        <div className="flex flex-col items-center gap-[48px] w-full max-w-[1024px]">
          <div className="flex flex-col items-center gap-[32px] w-full">
            <div className="flex flex-col items-center gap-[12px]">
              <h2 className="text-[28px] font-extrabold">Памятка психолога</h2>
              <p className="text-[14px] text-slate-400">
                «Как подготовить ребёнка к детскому саду»
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 w-full">
              {TIPS.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="flex flex-col gap-[12px] rounded-[16px] border border-purple-100 bg-purple-50 p-[20px] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-[32px]">{icon}</span>
                  <p className="font-bold text-purple-800 text-[16px]">
                    {title}
                  </p>
                  <p className="text-[14px] leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-[32px] w-full max-w-[70%]">
            <div className="flex flex-col items-center gap-[8px]">
              <h2 className="text-[28px] font-extrabold">
                Что должно быть в шкафчике?
              </h2>
              <p className="text-[14px]">
                Памятка для родителей — проверяйте раз в неделю
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 w-full">
              {CHECKLIST.map(({ emoji, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[12px] rounded-[16px] bg-white px-[16px] py-[12px] shadow-sm"
                >
                  <span className="text-[24px] shrink-0">{emoji}</span>
                  <p className="text-[14px] font-medium text-slate-700 flex-1">
                    {label}
                  </p>
                  <span className="text-green-400 font-bold text-[16px]">
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="section-docs" className="w-full flex justify-center">
        <div className="flex flex-col items-center gap-[32px] w-full max-w-[70%]">
          <div className="flex flex-col items-center gap-[8px]">
            <h2 className="text-[28px] font-extrabold text-orange-600 sm:text-[30px]">
              Документы
            </h2>
            <p className="text-[14px] text-slate-400">
              Нажмите на документ для подробной информации
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[20px] w-full">
            {officialDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex h-[112px] cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[16px] border border-slate-200 bg-white p-[16px] text-center shadow-sm transition-all hover:scale-105 hover:shadow-xl sm:h-[128px]"
              >
                <span className="text-[24px] sm:text-[32px]">{doc.icon}</span>
                <span className="text-[15px] font-semibold leading-tight text-slate-700">
                  {doc.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="section-faq"
        className="w-full flex flex-col items-center py-[56px] px-[16px] bg-white"
      >
        <div className="flex flex-col items-center gap-[32px] w-full max-w-[1024px]">
          <div className="flex flex-col items-center gap-[12px]">
            <span className="text-[48px]">❓</span>
            <h2 className="text-[28px] font-extrabold text-blue-800 ">
              Частые вопросы
            </h2>
            <p className="text-[14px] text-slate-400">
              Нажмите на вопрос чтобы увидеть ответ
            </p>
          </div>
          <Accordion items={FAQ} />
        </div>
      </div>
      <div className="w-full flex justify-center py-[40px]">
        <SliderReviews />
      </div>
    </section>
  );
}
