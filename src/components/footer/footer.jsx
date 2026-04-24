import { NavLink } from "react-router-dom";
import вк from "../../assets/вк.png";
import макс from "../../assets/макс.png";
import phone from "../../assets/footer-ico/icons8-телефон-24.png";
import email from "../../assets/footer-ico/icons8-@-24.png";
import home from "../../assets/footer-ico/icons8-здание-32.png";
import тг from "../../assets/тг.png";
import logo from "../../assets/лого без фона.png";
import { useState } from "react";

export default function Footer() {
  const [copiedType, setCopiedType] = useState(null);

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

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=301364+Тульская+область+г.Алексин+ул.Заводская+5а",
      "_blank",
    );
  };

  return (
    <footer className="w-full flex flex-col items-center gap-[20px]">
      <div className="w-[90%] h-[3px] bg-gradient-to-r from-red-500 via-orange-500 via-green-500 to-blue-500 rounded-[200px]"></div>

      <div className="flex flex-col items-center gap-[40px] w-full">
        <div className="flex flex-wrap justify-center items-start gap-[80px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[18px] font-bold text-orange">Контакты</h3>
            <ul className="flex flex-col gap-[16px]">
              <div
                onClick={() => copyToClipboard("8 (48753) 2-31-92", "phone")}
                className="flex items-center gap-[12px] group cursor-pointer relative"
              >
                <img
                  src={phone}
                  alt="телефон"
                  className="w-[20px] h-[20px] group-hover:w-[26px] group-hover:h-[26px] transition-all duration-300"
                />
                <li className="flex flex-col">
                  <p className="text-[10px] text-gray-400">
                    Контактный телефон
                  </p>
                  <p className="text-[14px] text-gray-700 group-hover:text-orange transition-colors duration-300">
                    8 (48753) 2-31-92
                  </p>
                </li>
                {copiedType === "phone" && (
                  <span className="absolute left-[40px] top-[-20px] text-[10px] text-green-600 bg-white px-[8px] py-[2px] rounded-[10px] shadow-md">
                    ✅ Скопировано!
                  </span>
                )}
              </div>

              <div
                onClick={() =>
                  copyToClipboard("aleksin.ds18@tularegion.org", "email")
                }
                className="flex items-center gap-[12px] group cursor-pointer relative"
              >
                <img
                  src={email}
                  alt="email"
                  className="w-[20px] h-[20px] group-hover:w-[26px] group-hover:h-[26px] transition-all duration-300"
                />
                <li className="flex flex-col">
                  <p className="text-[10px] text-gray-400">Электронная почта</p>
                  <p className="text-[14px] text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                    aleksin.ds18@tularegion.org
                  </p>
                </li>
                {copiedType === "email" && (
                  <span className="absolute left-[40px] top-[-20px] text-[10px] text-green-600 bg-white px-[8px] py-[2px] rounded-[10px] shadow-md">
                    ✅ Скопировано!
                  </span>
                )}
              </div>

              <div
                onClick={openMap}
                className="flex items-start gap-[12px] group cursor-pointer"
              >
                <img
                  src={home}
                  alt="адрес"
                  className="w-[20px] h-[20px] mt-[2px] group-hover:w-[26px] group-hover:h-[26px] transition-all duration-300"
                />
                <li className="flex flex-col">
                  <p className="text-[10px] text-gray-400">Адрес</p>
                  <p className="text-[14px] text-gray-700 group-hover:text-green-500 transition-colors duration-300 max-w-[250px]">
                    301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
                  </p>
                </li>
              </div>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-[20px]">
            <h3 className="text-[18px] font-bold text-blue-800">
              Навигация по сайту
            </h3>
            <ul className="flex flex-col items-center gap-[12px]">
              <li>
                <NavLink
                  to="мероприятия"
                  style={navLinkStyle}
                  className="group block relative"
                >
                  <p className="text-[16px] text-gray-600 group-hover:text-blue-500 transition-all duration-300">
                    Мероприятия
                  </p>
                  <span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="родителям"
                  style={navLinkStyle}
                  className="group block relative"
                >
                  <p className="text-[16px] text-gray-600 group-hover:text-purple-500 transition-all duration-300">
                    Родителям
                  </p>
                  <span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="оНас"
                  style={navLinkStyle}
                  className="group block relative"
                >
                  <p className="text-[16px] text-gray-600 group-hover:text-green-500 transition-all duration-300">
                    О нас
                  </p>
                  <span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </NavLink>
              </li>
            </ul>
          </div>

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
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-[20px] pt-[20px] text-[12px] text-gray-400 border-t border-gray-100 w-full">
          <p>Copyright © 2026. All Rights Reserved | by l0iV</p>
        </div>
      </div>
    </footer>
  );
}
