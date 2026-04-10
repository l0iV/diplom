import { NavLink, Link } from "react-router-dom";
import groupsData from "./listIndex.jsx/listIndex";
import logoMain from "../../assets/лого без фона.png";
import SliderNews from "../sliderNews/sliderRooms";
import god from "../../assets/god.png";
import banner from "../../assets/banner_news.png";
import listLessons from "./listIndex.jsx/listLessons";
import listGerb from "./listIndex.jsx/listGerb";

export default function Index() {
  return (
    <section className="flex flex-col w-full h-full items-center gap-[50px]">
      <div className="w-full bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] py-[60px]">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-[50px]">
            <div className="text-center md:text-left mb-[20px] md:mb-0">
              <h1 className="text-[35px] md:text-[45px] font-bold text-green-700">
                Муниципальное бюджетное дошкольное
              </h1>
              <p className="text-[25px] md:text-[30px] font-bold text-gray-700">
                образовательное учреждение "Детский сад
              </p>
              <p className="text-[25px] md:text-[30px] font-bold text-gray-700">
                комбинированного вида №18"
              </p>
              <p className="text-[16px] text-gray-500 mt-[10px]">
                МБДОУ "ДС комбинированного вида №18"
              </p>
            </div>
            <div>
              <img
                src={logoMain}
                alt=""
                className="w-[250px] md:w-[350px] logo-main"
              />
            </div>
          </div>
          <div className="bg-white rounded-[30px] p-[30px] shadow-lg">
            <h2 className="text-[28px] font-bold text-green-600 mb-[20px] text-center md:text-left">
              Наши контакты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              <div className="flex gap-[15px] items-start">
                <span className="text-[28px]">🏠</span>
                <div>
                  <p className="font-bold text-[16px]">Адрес:</p>
                  <p className="text-gray-600 text-[14px]">
                    301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <span className="text-[28px]">📞</span>
                <div>
                  <p className="font-bold text-[16px]">Контактный телефон:</p>
                  <p className="text-gray-600 text-[14px]">8 (48753) 2-31-92</p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <span className="text-[28px]">✉️</span>
                <div>
                  <p className="font-bold text-[16px]">Электронная почта:</p>
                  <p className="text-gray-600 text-[14px]">
                    aleksin.ds18@tularegion.org
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <span className="text-[28px]">⏰</span>
                <div>
                  <p className="font-bold text-[16px]">Режим работы:</p>
                  <p className="text-gray-600 text-[14px]">
                    пн — пт: 07:00—19:00
                  </p>
                  <p className="text-gray-500 text-[12px]">
                    выходные: суббота-воскресенье
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] flex flex-col gap-[20px]">
        <h1 className="font-bold bg-gradient-to-r from-sky-300 via-yellow-200 via-rose-300 to-green-300 bg-clip-text text-transparent text-center text-[40px]">
          Группы детского сада
        </h1>
        <div className="flex items-center justify-around w-full groups-list">
          {groupsData.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-[20px] p-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-[5px] flex flex-col gap-[30px] min-w-[400px] min-h-[250px] card"
            >
              <div className="flex items-center gap-[15px]">
                <img
                  src={group.icon}
                  alt={`Иконка ${group.name}`}
                  className="w-[50px]"
                />
                <div>
                  <p className="text-xl font-bold">{group.name}</p>
                  <p className="text-gray-500 text-[14px]">{group.age}</p>
                </div>
              </div>
              <div className="border-t pt-[15px]">
                <p className="text-xl font-bold text-blue-600 mb-[10px]">
                  {group.groupName}
                </p>
                <p className="text-gray-400 text-[14px] mb-[5px]">
                  Воспитатели:
                </p>
                <ul className="space-y-[5px]">
                  {group.teachers.map((teacher, index) => (
                    <li key={index} className="text-gray-600 text-[14px]">
                      {teacher}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SliderNews />
      <div className="w-[90%] mx-auto">
        <p className="text-center font-bold text-[35px] bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-[40px] text-black">
          Дополнительные занятия
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lesson">
          {listLessons.map((item) => {
            const colors = {
              1: {
                border: "border-red-500",
                text: "text-red-600",
                bg: "hover:bg-red-50",
              },
              2: {
                border: "border-green-500",
                text: "text-green-600",
                bg: "hover:bg-green-50",
              },
              3: {
                border: "border-blue-500",
                text: "text-blue-600",
                bg: "hover:bg-blue-50",
              },
            };
            const color = colors[item.id];
            return (
              <div
                className={`flex flex-col border-[2px] ${color.border} rounded-[25px] p-[25px] gap-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${color.bg} bg-white`}
                key={item.id}
              >
                <h3
                  className={`text-center font-bold text-[22px] ${color.text}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[16px] indent-6 text-justify ${color.text}`}
                >
                  {item.description}
                </p>
                <div className="flex flex-col gap-[5px] mt-auto">
                  <p className="text-[11px] text-gray-400">{item.position}</p>
                  <p className={`font-medium ${color.text}`}>{item.teacher}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ul className="flex flex-col gap-[30px] items-center banners w-[90%]">
        <li>
          <img
            src={god}
            alt=""
            className="cursor-pointer w-full max-w-[700px] rounded-[20px] shadow-lg hover:shadow-2xl transition-all"
          />
        </li>
        <li>
          <img
            src={banner}
            alt=""
            className="cursor-pointer w-full max-w-[700px] rounded-[20px] shadow-lg hover:shadow-2xl transition-all"
          />
        </li>
      </ul>
      <div className="flex flex-wrap items-center justify-center gap-[40px] w-[90%] py-[30px] border-t border-b border-gray-200">
        {listGerb.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-[15px] w-[200px] hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[70px] w-auto object-contain"
            />
            <p className="text-center text-gray-500 text-[12px] hover:text-blue-500 transition-colors">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[10px] py-[30px]">
        <p className="text-center text-gray-700">
          Столкнулись с нарушением закона? Сообщите нам
        </p>
        <p className="cursor-pointer underline text-blue-500 hover:text-blue-700 transition-colors text-center">
          Противодействие коррупции
        </p>
      </div>
    </section>
  );
}
