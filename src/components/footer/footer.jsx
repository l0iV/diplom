import { NavLink } from "react-router-dom";
import вк from "../../assets/вк.png";
import макс from "../../assets/макс.png";
import phone from "../../assets/footer-ico/icons8-телефон-24.png";
import email from "../../assets/footer-ico/icons8-@-24.png";
import home from "../../assets/footer-ico/icons8-здание-32.png";
import тг from "../../assets/тг.png";
import logo from "../../assets/лого без фона.png";
export default function Footer() {
  const navLinkStyle = {
    textDecoration: "none",
    color: "#374151",
  };

  const socials = [
    { name: "ВКонтакте", url: "/vk", icon: вк, color: "hover:bg-[#0077FF]" },
    {
      name: "Max",
      url: "/ok",
      icon: макс,
      color: "hover:bg-[#7a63be]",
    },
    { name: "Telegram", url: "/tg", icon: тг, color: "hover:bg-[#26A5E4]" },
  ];

  return (
    <footer className="w-full flex flex-col items-center gap-[20px]">
      <div className="w-[90%] h-[3px] bg-gradient-to-r from-red-500 via-orange-500 via-green-500 to-blue-500 rounded-[200px]"></div>

      <div className="flex flex-col items-center gap-[40px] w-full">
        <div className="flex flex-wrap justify-center items-start gap-[80px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[18px] font-bold text-orange">Контакты</h3>
            <ul className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[12px] group">
                <img
                  src={phone}
                  alt="телефон"
                  className="w-[20px] h-[20px] group-hover:scale-110 transition-all duration-300"
                />
                <li className="flex flex-col">
                  <p className="text-[10px] text-gray-400">
                    Контактный телефон
                  </p>
                  <p className="text-[14px] text-gray-700 group-hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                    8 (48753) 2-31-92
                  </p>
                </li>
              </div>

              <div className="flex items-center gap-[12px] group">
                <img
                  src={email}
                  alt="email"
                  className="w-[20px] h-[20px] group-hover:scale-110 transition-all duration-300"
                />
                <li className="flex flex-col">
                  <p className="text-[10px] text-gray-400">Электронная почта</p>
                  <p className="text-[14px] text-gray-700 group-hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                    aleksin.ds18@tularegion.org
                  </p>
                </li>
              </div>

              <div className="flex items-start gap-[12px] group">
                <img
                  src={home}
                  alt="адрес"
                  className="w-[20px] h-[20px] mt-[2px] group-hover:scale-110 transition-all duration-300"
                />
                <li className="flex flex-col">
                  <p className="text-[10px] text-gray-400">Адрес</p>
                  <p className="text-[14px] text-gray-700 group-hover:text-orange-500 transition-colors duration-300 max-w-[250px] cursor-pointer">
                    301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
                  </p>
                </li>
              </div>
            </ul>
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА - Навигация */}
          <div className="flex flex-col items-center gap-[20px]">
            <h3 className="text-[18px] font-bold text-blue-800">
              Навигация по сайту
            </h3>
            <ul className="flex flex-col items-center gap-[12px]">
              <li>
                <NavLink
                  to="мероприятия"
                  style={navLinkStyle}
                  className="group block"
                >
                  <p className="text-[16px] text-gray-600 group-hover:text-blue-500 group-hover:translate-x-[4px] transition-all duration-300">
                    Мероприятия
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="родителям"
                  style={navLinkStyle}
                  className="group block"
                >
                  <p className="text-[16px] text-gray-600 group-hover:text-blue-500 group-hover:translate-x-[4px] transition-all duration-300">
                    Родителям
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="оНас" style={navLinkStyle} className="group block">
                  <p className="text-[16px] text-gray-600 group-hover:text-blue-500 group-hover:translate-x-[4px] transition-all duration-300">
                    О нас
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ПРАВАЯ КОЛОНКА - Соцсети */}
          <div className="flex flex-col gap-[30px] items-center">
            <div>
              <img src={logo} alt="" className="w-[300px]" />
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="flex flex-wrap justify-center gap-[12px]">
                {socials.map((social) => (
                  <NavLink
                    key={social.name}
                    to={social.url}
                    className={`
                    flex items-center gap-[8px] px-[16px] py-[10px] rounded-full text-[14px] font-medium
                    bg-gray-50 text-gray-700 border border-gray-200
                    transition-all duration-300 ease-out
                    hover:shadow-md hover:-translate-y-[2px]
                    ${social.color} hover:text-white hover:border-transparent
                  `}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-[16px] h-[16px]"
                    />
                    {social.name}
                  </NavLink>
                ))}
              </div>
              <h3 className="text-[13px] text-gray-800">- мы в соц. сетях</h3>
            </div>
          </div>
        </div>

        {/* Нижний блок - Копирайт */}
        <div className="flex flex-wrap justify-center items-center gap-[20px] pt-[20px] text-[12px] text-gray-400 border-t border-gray-100 w-full">
          <p>Copyright © 2026. All Rights Reserved | by l0iV</p>
        </div>
      </div>
    </footer>
  );
}
