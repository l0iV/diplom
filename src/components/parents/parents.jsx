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
      <div className="w-[75%] bg-white rounded-[30px] p-[40px] shadow-xl flex flex-col gap-[40px] items-center justify-center">
        <div className="w-full flex flex-col gap-[60px]">
          <div className="text-center">
            <div className="text-[50px] mb-[10px]">📝</div>
            <h2 className="text-[28px] font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Подача заявки в детский сад
            </h2>
            <p className="text-[14px] text-gray-400 mt-[10px]">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[30px]">
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
            <div className="col-span-2 flex items-start gap-[10px]">
              <input
                type="checkbox"
                id="consent"
                className="mt-[2px] w-[16px] h-[16px] cursor-pointer"
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
              📨 Отправить заявку
            </button>
          </form>

          {/* Инфо-блок */}
          <div className="flex items-center justify-center gap-[30px] flex-wrap pt-[20px] border-t border-gray-100">
            <div className="flex items-center gap-[8px] text-[13px] text-gray-400">
              <span>🔒</span> Данные защищены
            </div>
            <div className="flex items-center gap-[8px] text-[13px] text-gray-400">
              <span>⏱️</span> Ответ в течение 24 часов
            </div>
            <div className="flex items-center gap-[8px] text-[13px] text-gray-400">
              <span>📞</span> Или звоните: 8 (48753) 2-31-92
            </div>
          </div>
        </div>
      </div>
      {/* Блок с мессенджерами */}
      <div className="w-[75%] bg-gradient-to-r from-blue-50 to-purple-50 rounded-[30px] p-[40px] shadow-xl flex flex-col items-center gap-[30px]">
        <div className="text-center">
          <h3 className="text-[24px] font-bold text-gray-800 mb-[10px]">
            💬 Или просто напишите в мессенджер
          </h3>
        </div>

        <div className="flex items-center justify-center gap-[30px] flex-wrap">
          {/* Telegram */}
          <a
            href="https://t.me/ваш_логин"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[12px] bg-white px-[25px] py-[12px] rounded-[50px] shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <span className="text-[28px]">📱</span>
            <div>
              <p className="font-bold text-[16px] text-gray-800">Telegram</p>
              <p className="text-[12px] text-gray-400">@ваш_логин</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/79000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[12px] bg-white px-[25px] py-[12px] rounded-[50px] shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <span className="text-[28px]">💚</span>
            <div>
              <p className="font-bold text-[16px] text-gray-800">WhatsApp</p>
              <p className="text-[12px] text-gray-400">+7 (900) 000-00-00</p>
            </div>
          </a>

          {/* Viber */}
          <a
            href="viber://chat?number=79000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[12px] bg-white px-[25px] py-[12px] rounded-[50px] shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <span className="text-[28px]">💜</span>
            <div>
              <p className="font-bold text-[16px] text-gray-800">Viber</p>
              <p className="text-[12px] text-gray-400">+7 (900) 000-00-00</p>
            </div>
          </a>
        </div>

        <p className="text-[12px] text-gray-400 text-center">
          Нажимая на кнопку мессенджера, вы соглашаетесь с политикой обработки
          персональных данных
        </p>
      </div>
      {/* Меню питания */}
      <div className="w-[90%] max-w-[900px] flex flex-col items-center gap-[30px]">
        <h2 className="text-[32px] font-bold text-blue-800">
          Примерное 20-дневное меню
        </h2>
        <p className=" text-center text-blue-300">
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
