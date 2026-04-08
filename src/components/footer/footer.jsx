import { NavLink } from "react-router-dom";
import вк from "../../assets/вк.png";
import инст from "../../assets/инста.png";
import тг from "../../assets/tg.png";
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
      <h1 className="text-[30px]">
        МБДОУ " Детский сад комбинированного вида №18"
      </h1>
      <div className="flex justify-around w-full items-center content-footer">
        <div className="flex flex-col items-center gap-[20px] w-[33%] social">
          <h3 className="text-[25px">Мы в соц. сетях:</h3>
          <ul className="flex items-center justify-center gap-[10px]">
            <li>
              <img src={вк} alt="вк" className=" w-[60px] cursor-pointer" />
            </li>
            <li>
              <img src={инст} alt="инст" className=" w-[75px] cursor-pointer" />
            </li>
            <li>
              <img
                src={тг}
                alt="телеграмм"
                className=" w-[45px] cursor-pointer"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-[33%] ">
          <ul className="flex flex-col items-center gap-[10px] w-[35%] navigation">
            <h3>Навигация по сайту:</h3>
            <li>
              <NavLink to="мероприятия" style={navLinkStyle}>
                <p className="text-pink">Мероприятия</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="родителям" style={navLinkStyle}>
                <p className="text-blue-600">Родителям</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="оНас">
                <p className="text-red-700">О нас</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col items-start gap-[10px] w-[33%] contacty">
          <li>
            <p>Контактный телефон:</p>
            <p className="text-pink">8 (48753) 2-31-92</p>
          </li>
          <li>
            <p>Электронная почта:</p>
            <p className="text-blue-600">aleksin.ds18@tularegion.org</p>
          </li>
          <li>
            <p>Адрес:</p>
            <p className="text-red-700">
              301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
            </p>
          </li>
        </ul>
      </div>
      <h1>Copyright © 2026. All Rights Reserved | by l0iV</h1>
    </section>
  );
}
