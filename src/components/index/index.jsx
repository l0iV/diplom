import { NavLink, Link } from "react-router-dom";
import groupsData from "./listIndex.jsx/listIndex";
import logoMain from "../../assets/лого без фона.png";
import email from "../../assets/email.png";
import house from "../../assets/house.png";
import watch from "../../assets/watch.png";
import phone from "../../assets/phone.png";
import SliderNews from "../sliderNews/sliderRooms";
import god from "../../assets/god.png";
import banner from "../../assets/banner_news.png";
import listLessons from "./listIndex.jsx/listLessons";
import listGerb from "./listIndex.jsx/listGerb";
export default function Index() {
  return (
    <section className="flex flex-col w-full h-full items-center gap-[50px]">
      <section className="w-full flex justify-around items-start max-h-max main-section">
        <section className="flex flex-col max-h-max w-[60%] gap-[40px] section-left">
          <section className="bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] rounded-[50px] p-[30px] flex flex-col gap-[50px]">
            <div className="flex">
              <div className="flex flex-col items-start text-[30px] max-w-max font-bold org-name">
                <p>Муниципальное бюджетное дошкольное</p>
                <p>образовательное учреждение "Детский сад</p>
                <p>комбинированного вида №18"</p>
                <p className="text-[15px] text-[#474a51] font-normal">
                  МБДОУ "ДС комбинированного вида №18"
                </p>
              </div>
              <div>
                <img src={logoMain} alt="" className="w-[400px] logo-main" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <ul className="flex flex-col gap-[30px]">
                <li className="flex gap-[10px] items-center">
                  <img src={house} alt="" className="w-[24px]" />
                  <p>Адрес</p>
                  <p>
                    301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
                  </p>
                </li>
                <li className="flex gap-[10px] items-center">
                  <img src={phone} alt="" className="w-[30px]" />
                  <p>Контактный телефон</p>
                  <p>8 (48753) 2-31-92</p>
                </li>
                <li className="flex gap-[10px] items-center">
                  <img src={email} alt="" className="w-[24px]" />
                  <p>Электронная почта</p>
                  <p>aleksin.ds18@tularegion.org</p>
                </li>
                <li className="flex gap-[10px] items-center">
                  <img src={watch} alt="" className="w-[24px]" />
                  <p>Режим работы</p>
                  <div className="flex flex-col gap-[5px]">
                    <p>пн — пт: 07:00—19:00</p>
                    <p>выходные: суббота-воскресенье и праздничные дни</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <ul className="flex flex-col gap-[20px] items-center banners">
            <li className="flex gap-[20px]">
              <img src={god} alt="" className="cursor-pointer w-[700px]" />
            </li>
            <img src={banner} alt="" className="cursor-pointer w-[700px]" />
            <li></li>
          </ul>
        </section>
        <section className="flex flex-col w-[30%] items-center max-h-max gap-[20px]">
          <h1 className="font-bold bg-gradient-to-r from-sky-300 via-yellow-200 via-rose-300 to-green-300 bg-clip-text text-transparent text-center text-[40px] max-w-[300px]">
            Группы детского сада
          </h1>
          <ul className="flex flex-col gap-8 w-full groups-list">
            {groupsData.map((group) => (
              <li key={group.id} className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-5 w-full">
                  <img
                    src={group.icon}
                    alt={`Иконка ${group.name}`}
                    className="w-12"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-xl">{group.name}</p>
                    <p>{group.age}</p>
                  </div>
                </div>
                <div className="card-group">
                  <ul className="flex flex-col gap-2 ml-[10px]">
                    <li className="text-2xl text-blue-600">
                      {group.groupName}
                    </li>
                    <li className="text-gray-400">Воспитатели</li>
                    {group.teachers.map((teacher, index) => (
                      <li key={index}>{teacher}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <SliderNews />
      <section className="flex flex-col items-center gap-[50px] w-full lesson-text">
        <p className="text-orange font-bold text-[30px]">
          Дополнительные занятия
        </p>
        <section className="flex flex-wrap justify-center items-center w-full gap-[50px] lesson">
          {listLessons.map((item) => {
            const colors = {
              1: {
                border: "border-red-500",
              },
              2: {
                border: "border-green-500",
              },
              3: {
                border: "border-blue-500",
              },
            };

            const color = colors[item.id];

            return (
              <div
                className={`lesson-card flex flex-col border-[2px] ${color.border} w-[400px] h-[300px] rounded-[25px] p-[20px] gap-[30px] shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}
                key={item.id}
              >
                <h3 className={`text-center font-bold text-[25px] `}>
                  {item.title}
                </h3>
                <p className={`text-[20px] indent-10 text-justify`}>
                  {item.description}
                </p>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[12px] text-gray-400">{item.position}</p>
                  <p className="">{item.teacher}</p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
      <section className="flex items-center gap-[50px] w-full justify-center flex-wrap gerb-main">
        {listGerb.map((item) => (
          <div
            key={item.id}
            className="gerb flex items-center text-[18px] w-[350px] gap-[30px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[80px] w-auto object-contain"
            />
            <p className="text-center text-gray-500">{item.title}</p>
          </div>
        ))}
      </section>
      <div className="flex flex-col items-center">
        <p>Столкнулись с нарушением закона? Сообщите нам</p>
        <p className="cursor-pointer underline text-blue-400">
          Противодействие коррупции
        </p>
      </div>
    </section>
  );
}
