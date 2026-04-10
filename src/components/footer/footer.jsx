import { NavLink } from "react-router-dom";
import вк from "../../assets/вк.png";
import макс from "../../assets/макс.png";
import phone from "../../assets/footer-ico/icons8-телефон-24.png";
import email from "../../assets/footer-ico/icons8-@-24.png";
import home from "../../assets/footer-ico/icons8-здание-32.png";
import тг from "../../assets/тг.png";

export default function Footer() {
  const navLinkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const BorderColor = {
    borderLeft: "5px solid orange",
    borderTop: "5px solid blue",
    borderRight: "5px solid red",
    borderBottom: "5px solid green",
    borderRadius: "40px",
  };

  return (
    <section
      className="min-h-[100px] w-full items-center bg-[#eff5f9] flex flex-col gap-[20px] text-[20px] p-[20px] footer"
      style={BorderColor}
    >
      <h1 className="text-[30px] font-bold hover:scale-105 transition-all duration-300 cursor-pointer">
        МБДОУ "Детский сад комбинированного вида №18"
      </h1>

      <div className="flex justify-center w-full items-start content-footer">
        {/* Контакты */}
        <ul className="flex flex-col items-start gap-[15px] w-[33%] contacty">
          <div className="flex items-center gap-[10px] group cursor-pointer">
            <img
              src={phone}
              alt=""
              className="w-[24px] h-[24px] group-hover:scale-110 transition-all duration-300"
            />
            <li>
              <p>Контактный телефон:</p>
              <p className="text-pink group-hover:text-pink-600 transition-all duration-300">
                8 (48753) 2-31-92
              </p>
            </li>
          </div>

          <div className="flex items-center gap-[10px] group cursor-pointer">
            <img
              src={email}
              alt=""
              className="w-[24px] h-[24px] group-hover:scale-110 transition-all duration-300"
            />
            <li>
              <p>Электронная почта:</p>
              <p className="text-blue-600 group-hover:text-blue-800 transition-all duration-300">
                aleksin.ds18@tularegion.org
              </p>
            </li>
          </div>

          <div className="flex items-center gap-[10px] group cursor-pointer">
            <img
              src={home}
              alt=""
              className="w-[24px] h-[24px] group-hover:scale-110 transition-all duration-300"
            />
            <li>
              <p>Адрес:</p>
              <p className="text-red-700 group-hover:text-red-900 transition-all duration-300">
                301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
              </p>
            </li>
          </div>
        </ul>

        {/* Навигация */}
        <div className="flex flex-col items-center w-[35%]">
          <ul className="flex flex-col items-center gap-[15px] w-[35%] navigation">
            <h3 className="text-[22px] font-bold">Навигация по сайту:</h3>
            <li>
              <NavLink to="мероприятия" style={navLinkStyle} className="group">
                <p className="text-pink text-[18px] transition-all duration-300 group-hover:scale-105 group-hover:underline">
                  Мероприятия
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="родителям" style={navLinkStyle} className="group">
                <p className="text-blue-600 text-[18px] transition-all duration-300 group-hover:scale-105 group-hover:underline">
                  Родителям
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="оНас" style={navLinkStyle} className="group">
                <p className="text-red-700 text-[18px] transition-all duration-300 group-hover:scale-105 group-hover:underline">
                  О нас
                </p>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Соцсети */}
        <div className="flex flex-col items-center gap-[20px] w-[33%] social">
          <h3 className="text-[22px] font-bold">Мы в соц. сетях:</h3>
          <ul className="flex items-center justify-center gap-[20px]">
            <li className="group">
              <img
                src={вк}
                alt="вк"
                className="w-[45px] cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-[5px]"
              />
            </li>
            <li className="group">
              <img
                src={макс}
                alt="инст"
                className="w-[45px] cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-[5px]"
              />
            </li>
            <li className="group">
              <img
                src={тг}
                alt="телеграмм"
                className="w-[45px] cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-[5px]"
              />
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-[14px] text-gray-500 mt-[20px] pt-[10px] border-t border-gray-300 w-full text-center">
        Copyright © 2026. All Rights Reserved | by l0iV
      </h1>
    </section>
  );
}
