import { NavLink, Link } from "react-router-dom";
import groupsData from "./listIndex.jsx/listIndex";
import logoMain from "../../assets/лого без фона.png";
import email from "../../assets/email.png";
import house from "../../assets/house.png";
import watch from "../../assets/watch.png";
import phone from "../../assets/phone.png";
import SliderNews from "../sliderNews/sliderNews";
import god from "../../assets/god.png";
import banner from "../../assets/banner_news.png";
import zapis from "../../assets/zapis (2).png";
export default function Index() {
  const navLinkStyle = {
    textDecoration: "none",
  };

  return (
    <section className="flex flex-col w-full h-full items-center gap-[50px]">
      <section className="w-full flex justify-around items-start max-h-max main-section">
        <section className="flex flex-col max-h-max w-[60%] gap-[40px] section-left">
          <section className="bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] rounded-[50px] p-[30px] flex flex-col gap-[50px] ">
            <div className="flex ">
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
            <li className="cursor-pointer">
              <img src={zapis} alt="" className="w-[1000px] rounded-[20px]" />
            </li>
            <li className="flex gap-[20px]">
              <img src={god} alt="" className="cursor-pointer w-[500px]" />
            </li>
            <img src={banner} alt="" className="cursor-pointer w-[500px]" />
            <li></li>
          </ul>
        </section>
        <section className="flex flex-col w-[30%] items-center max-h-max gap-[20px]">
          <h1 className=" font-bold bg-gradient-to-r from-sky-300 via-yellow-200 via-rose-300 to-green-300 bg-clip-text text-transparent text-center text-[40px] max-w-[300px]">
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
    </section>
  );
}
