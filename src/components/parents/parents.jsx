import React, { useState } from "react";
import baby from "../../assets/baby.png";

const officialDocuments = [
  { id: 1, title: "Договор об образовании", icon: "📄" },
  { id: 2, title: "Порядок приема и отчисления", icon: "📖" },
  { id: 3, title: "Режим дня и график работы", icon: "🕒" },
  { id: 4, title: "План образовательной деятельности", icon: "📈" },
  { id: 5, title: "Правила внутреннего распорядка", icon: "🛡️" },
  { id: 6, title: "Информация о питании", icon: "🍽️" },
  { id: 7, title: "Родительский комитет", icon: "👨‍👩‍👧‍👦" },
  { id: 8, title: "Дополнительные услуги", icon: "⭐" },
  { id: 9, title: "Противодействие коррупции", icon: "⚖️" },
  { id: 10, title: "Полезные ссылки", icon: "🔗" },
];

const parentsReviews = [
  {
    id: 1,
    title: "Анна С.",
    text: "Отличный садик! Дочка ходит с удовольствием, воспитатели очень внимательные.",
    rating: 5,
  },
  {
    id: 2,
    title: "Михаил К.",
    text: "Хорошая подготовка к школе, много развивающих занятий. Рекомендую!",
    rating: 5,
  },
  {
    id: 3,
    title: "Елена В.",
    text: "Отдельное спасибо за питание - ребёнок всегда сытый и довольный.",
    rating: 5,
  },
];

const menuData = [
  {
    key: "yasli",
    name: "Ясли (1.5 - 3 года)",
    days: Array.from({ length: 20 }, (_, i) => ({
      day: i + 1,
      breakfast: [
        "Каша рисовая молочная",
        "Чай с молоком",
        "Бутерброд с маслом",
      ][i % 3],
      lunch: [
        "Суп овощной, котлета куриная с пюре, компот",
        "Борщ, рыба запечённая с рисом, кисель",
        "Суп-лапша, тефтели с гречкой, сок",
      ][i % 3],
      afternoonSnack: ["Йогурт", "Творожная запеканка", "Печенье с молоком"][
        i % 3
      ],
      dinner: ["Омлет, чай", "Сырники со сметаной", "Пудинг творожный"][i % 3],
    })),
  },
  {
    key: "mladshaya",
    name: "Младшая (3 - 4 года)",
    days: Array.from({ length: 20 }, (_, i) => ({
      day: i + 1,
      breakfast: ["Каша манная", "Какао", "Сыр с хлебом"][i % 3],
      lunch: [
        "Рассольник, гуляш с макаронами, морс",
        "Щи, плов куриный, компот",
        "Суп грибной, биточки с картофельным пюре, кисель",
      ][i % 3],
      afternoonSnack: ["Фрукты", "Булочка с чаем", "Смузи"][i % 3],
      dinner: [
        "Рыбные котлеты с пюре",
        "Макароны с сыром",
        "Запеканка рисовая",
      ][i % 3],
    })),
  },
  {
    key: "srednyaya",
    name: "Средняя (4 - 5 лет)",
    days: Array.from({ length: 20 }, (_, i) => ({
      day: i + 1,
      breakfast: ["Овсяная каша с ягодами", "Чай", "Омлет с сыром"][i % 3],
      lunch: [
        "Солянка, печень по-строгановски с гречкой, сок",
        "Свекольник, голубцы, компот",
        "Уха, курица запечённая с овощами, морс",
      ][i % 3],
      afternoonSnack: ["Ряженка", "Пряники", "Кефир с печеньем"][i % 3],
      dinner: ["Драники со сметаной", "Гречневики", "Ленивые вареники"][i % 3],
    })),
  },
  {
    key: "starshaya",
    name: "Старшая (5 - 6 лет)",
    days: Array.from({ length: 20 }, (_, i) => ({
      day: i + 1,
      breakfast: ["Сырники со сгущёнкой", "Какао", "Гренки с яйцом"][i % 3],
      lunch: [
        "Харчо, бефстроганов с рисом, кисель",
        "Гороховый суп, котлета по-киевски с пюре, компот",
        "Крем-суп из брокколи, запеканка мясная, сок",
      ][i % 3],
      afternoonSnack: ["Йогурт с мюсли", "Фруктовое пюре", "Молоко с печеньем"][
        i % 3
      ],
      dinner: ["Блинчики с творогом", "Рисовая запеканка", "Рыбное суфле"][
        i % 3
      ],
    })),
  },
];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("✅ Заявка успешно отправлена!");
  };

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <section className="flex flex-col items-center w-full gap-[40px] bg-gradient-to-b from-slate-50 to-white pb-[60px]">
      {/* Верхний блок с картинкой */}
      <div className="w-full bg-[linear-gradient(135deg,#d5ffd6,#ffbef9)] flex flex-wrap justify-center items-center gap-[100px] min-h-[450px]">
        <div className="animate-[float_3s_ease-in-out_infinite]">
          <img src={baby} alt="" className="w-[400px]" />
        </div>
        <div className="flex flex-col gap-[15px] p-[30px]">
          <h1 className="font-bold bg-gradient-to-r from-amber-700 to-rose-600 bg-clip-text text-transparent text-center text-[60px]">
            Уважаемые родители!
          </h1>
          <p className="text-[20px] text-amber-800 text-center max-w-[600px]">
            Вместе мы создаем счастливое будущее!
          </p>
        </div>
      </div>

      {/* Форма заявки */}
      <div className="w-[90%] max-w-[1200px] bg-white rounded-[30px] p-[40px] shadow-xl flex flex-col gap-[40px] items-center">
        <div className="w-full flex flex-col gap-[20px]">
          <h2 className="text-[28px] font-bold">Подача заявки в детский сад</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[15px]">
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              placeholder="ФИО родителя"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Телефон"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
            />
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleInputChange}
              placeholder="ФИО ребенка"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              required
            />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
              required
            />
            <select
              name="group"
              value={formData.group}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
            >
              <option value="">Выберите группу</option>
              <option value="yasli">Ясли (1.5 - 3 года)</option>
              <option value="mladshaya">Младшая (3 - 4 года)</option>
              <option value="srednyaya">Средняя (4 - 5 лет)</option>
              <option value="starshaya">Старшая (5 - 6 лет)</option>
            </select>
            <button
              type="submit"
              className="col-span-2 bg-gradient-to-r from-green-400 to-green-500 min-h-[50px] rounded-[50px] text-white font-bold text-[16px] hover:from-green-500 hover:to-green-600 transition-all duration-300 cursor-pointer"
            >
              Подать заявление
            </button>
          </form>
        </div>
      </div>

      {/* Меню питания */}
      <div className="w-[90%] max-w-[900px] flex flex-col items-center gap-[30px]">
        <h2 className="text-[32px] font-bold">Примерное 20-дневное меню</h2>
        <p className="text-slate-500 text-center">
          Нажмите на группу, чтобы посмотреть меню
        </p>

        <div className="flex flex-col gap-[15px] w-full">
          {menuData.map((group) => (
            <div
              key={group.key}
              className="bg-white rounded-[20px] shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleMenu(group.key)}
                className="w-full p-[20px] bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 transition-all flex justify-between items-center cursor-pointer"
              >
                <span className="text-[20px] font-bold text-slate-800">
                  {group.name}
                </span>
                <span
                  className="text-[24px] transition-transform duration-300"
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
                <div className="p-[20px] max-h-[500px] overflow-y-auto border-t border-green-100">
                  <div className="flex flex-col gap-[12px]">
                    {group.days.map((day) => (
                      <div
                        key={day.day}
                        className="bg-gradient-to-r from-slate-50 to-white rounded-[12px] p-[15px] shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="font-bold text-green-600 text-[16px] mb-[10px]">
                          📅 День {day.day}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] text-[14px]">
                          <div className="bg-white rounded-[10px] p-[10px] border-l-4 border-amber-400">
                            <div className="font-semibold text-amber-600 mb-[5px]">
                              🍳 Завтрак
                            </div>
                            <div className="text-slate-700">
                              {day.breakfast}
                            </div>
                          </div>
                          <div className="bg-white rounded-[10px] p-[10px] border-l-4 border-orange-400">
                            <div className="font-semibold text-orange-600 mb-[5px]">
                              🍲 Обед
                            </div>
                            <div className="text-slate-700">{day.lunch}</div>
                          </div>
                          <div className="bg-white rounded-[10px] p-[10px] border-l-4 border-pink-400">
                            <div className="font-semibold text-pink-600 mb-[5px]">
                              🥛 Полдник
                            </div>
                            <div className="text-slate-700">
                              {day.afternoonSnack}
                            </div>
                          </div>
                          <div className="bg-white rounded-[10px] p-[10px] border-l-4 border-purple-400">
                            <div className="font-semibold text-purple-600 mb-[5px]">
                              🍽️ Ужин
                            </div>
                            <div className="text-slate-700">{day.dinner}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Документы */}
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center gap-[30px]">
        <h2 className="text-[32px] font-bold">Документы</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[15px] w-full">
          {officialDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-[20px] p-[20px] flex flex-col items-center justify-center gap-[10px] text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all border border-slate-200 h-[130px]"
            >
              <span className="text-[32px]">{doc.icon}</span>
              <span className="text-[13px] font-semibold text-slate-700 leading-tight">
                {doc.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Отзывы */}
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center gap-[30px] mb-[40px]">
        <h2 className="text-[32px] font-bold">Отзывы родителей</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {parentsReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[20px] p-[25px] shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-[12px] mb-[15px]">
                <div className="w-[50px] h-[50px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-[18px]">
                  {review.title[0]}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-bold text-[16px] text-slate-800">
                    {review.title}
                  </h3>
                  <div className="text-yellow-500 text-[14px]">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
