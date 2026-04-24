import React, { useState } from "react";
import baby from "../../assets/baby.png";
import menuData from "./groupList/groupList";
import officialDocuments from "./groupList/infoList";
import parentsReviews from "../sliderParentsReviews/listSlider/parentsReviewsList";
import SliderReviews from "../sliderParentsReviews/sliderReviews";

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
        <div className="flex flex-col gap-[15px]">
          <h1 className="font-bold bg-gradient-to-r from-amber-700 to-rose-600 bg-clip-text text-transparent text-center text-[60px]">
            Уважаемые родители!
          </h1>
          <p className="text-[20px] text-amber-800 text-center w-[600px]">
            Вместе мы создаем счастливое будущее!
          </p>
        </div>
      </div>

      {/* Форма заявки */}
      <div className="w-[75%] bg-white rounded-[30px] shadow-xl flex flex-col items-center gap-[40px] p-[40px]">
        <div className="w-full flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[10px] text-center">
            <h2 className="text-[28px] font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Подача заявки в детский сад
            </h2>
            <p className="text-[14px] text-gray-400">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <form className="grid grid-cols-2 gap-[30px]">
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              placeholder="ФИО родителя"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Телефон"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            />
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleInputChange}
              placeholder="ФИО ребенка"
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
              required
            />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
              required
            />
            <select
              name="group"
              value={formData.group}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-[12px] p-[12px] outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            >
              <option value="">Выберите группу</option>
              <option value="yasli">Ясли (1.5 - 3 года)</option>
              <option value="mladshaya">Младшая (3 - 4 года)</option>
              <option value="srednyaya">Средняя (4 - 5 лет)</option>
              <option value="starshaya">Старшая (5 - 6 лет)</option>
              <option value="podgotovitelnaya">
                Подготовительная (6 - 7 лет)
              </option>
            </select>

            {/* Чекбокс согласия */}
            <div className="col-span-2 flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="consent"
                className="w-[16px] h-[16px] cursor-pointer"
                required
              />
              <label
                htmlFor="consent"
                className="text-[12px] text-gray-500 cursor-pointer"
              >
                Я согласен(на) на обработку персональных данных в соответствии с
                <a href="#" className="text-green-600 hover:underline">
                  {" "}
                  политикой конфиденциальности
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="col-span-2 bg-gradient-to-r from-green-500 to-blue-500 min-h-[55px] rounded-[50px] text-white font-bold text-[18px] hover:from-green-600 hover:to-blue-600 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
            >
              Отправить заявку
            </button>
          </form>

          {/* Инфо-блок */}
          <div className="flex items-center justify-center gap-[30px] flex-wrap">
            <div className="flex items-center gap-[8px] text-[13px] text-gray-400">
              <span>🔒</span> Данные защищены
            </div>
          </div>
        </div>
      </div>

      {/* Меню питания */}
      <div className="w-[90%] max-w-[900px] flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-[10px]">
          <h2 className="text-[32px] font-bold text-blue-800">
            Примерное 20-дневное меню
          </h2>
          <p className="text-center text-blue-300">
            Нажмите на группу, чтобы посмотреть меню
          </p>
        </div>

        <div className="flex flex-col gap-[15px] w-full">
          {menuData.map((group, index) => {
            const btnColors = ["btn-pink", "btn-blue", "btn-orange", "btn-red"];
            const colorClass = btnColors[index % btnColors.length];

            const textColors = {
              "btn-pink": "text-pink-600",
              "btn-blue": "text-blue-600",
              "btn-orange": "text-orange-600",
              "btn-red": "text-red-600",
            };
            const textColor = textColors[colorClass];

            return (
              <div
                key={group.key}
                className="bg-white rounded-[20px] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleMenu(group.key)}
                  className={`w-full p-[20px] transition-all flex justify-between items-center ${colorClass}`}
                >
                  <span className="text-[20px] font-bold">{group.name}</span>
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
                  <div className="flex flex-col gap-[25px] p-[25px] max-h-[600px] overflow-y-auto">
                    <div className="flex flex-col gap-[15px]">
                      {group.days.map((day) => (
                        <div
                          key={day.day}
                          className="bg-gradient-to-r from-slate-50 to-white rounded-[15px] p-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-[2px]"
                        >
                          <div
                            className={`font-bold ${textColor} text-[18px] mb-[15px] flex items-center gap-[10px]`}
                          >
                            <span>📅</span>
                            {day.fullDate ||
                              `День ${day.day} (${day.date || ""})`}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] text-[14px]">
                            <div className="bg-white rounded-[12px] p-[12px] border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                              <div className="font-semibold text-amber-600 mb-[8px] flex items-center gap-[5px]">
                                <span>🍳</span> Завтрак
                              </div>
                              <div className="text-slate-700 text-[13px] leading-relaxed">
                                {day.breakfast}
                              </div>
                            </div>
                            <div className="bg-white rounded-[12px] p-[12px] border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-all">
                              <div className="font-semibold text-orange-600 mb-[8px] flex items-center gap-[5px]">
                                <span>🍲</span> Обед
                              </div>
                              <div className="text-slate-700 text-[13px] leading-relaxed">
                                {day.lunch}
                              </div>
                            </div>
                            <div className="bg-white rounded-[12px] p-[12px] border-l-4 border-pink-400 shadow-sm hover:shadow-md transition-all">
                              <div className="font-semibold text-pink-600 mb-[8px] flex items-center gap-[5px]">
                                <span>🥛</span> Полдник
                              </div>
                              <div className="text-slate-700 text-[13px] leading-relaxed">
                                {day.afternoonSnack}
                              </div>
                            </div>
                            <div className="bg-white rounded-[12px] p-[12px] border-l-4 border-purple-400 shadow-sm hover:shadow-md transition-all">
                              <div className="font-semibold text-purple-600 mb-[8px] flex items-center gap-[5px]">
                                <span>🍽️</span> Ужин
                              </div>
                              <div className="text-slate-700 text-[13px] leading-relaxed">
                                {day.dinner}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Документы */}
      <div className="w-[80%] flex flex-col items-center gap-[30px]">
        <h2 className="text-[32px] font-bold text-orange">Документы</h2>
        <div className="grid grid-cols-5 gap-[15px] w-full">
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

      <SliderReviews />
    </section>
  );
}
