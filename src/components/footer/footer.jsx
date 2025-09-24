import { NavLink } from "react-router-dom";
import вк from "../../assets/вк.png";
import инст from "../../assets/инста.png";
import тг from "../../assets/tg.png";
export default function Footer() {
  const navLinkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <section className="min-h-[100px] w-full items-center bg-[#eff5f9] flex flex-col gap-[20px] text-[20px] p-[20px]">
      <h1>МБДОУ " Детский сад комбинированного вида №18"</h1>
      <div className="flex justify-around w-full items-center">
        <div className="flex flex-col items-center gap-[20px] w-[33%]">
          <h3>Мы в соц. сетях:</h3>
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
        <div className="flex flex-col items-center w-[33%]">
          <ul className="flex flex-col items-start gap-[10px] w-[33%]">
            <h3>Навигация по сайту:</h3>
            <li>
              <NavLink to="мероприятия" style={navLinkStyle}>
                Мероприятия
              </NavLink>
            </li>
            <li>
              <NavLink to="родителям" style={navLinkStyle}>
                Родителям
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="отзывы">
                Отзывы
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="оНас">
                О нас
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col items-start gap-[10px] w-[33%]">
          <li>
            <p>Контактный телефон</p>
            <p>8 (48753) 2-31-92</p>
          </li>
          <li>
            <p>Электронная почта</p>
            <p>aleksin.ds18@tularegion.org</p>
          </li>
          <li>
            <p>Адрес</p>
            <p>301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а</p>
          </li>
        </ul>
      </div>
      <h1>Copyright © 2025. All Rights Reserved | by l0iV</h1>
    </section>
  );
}
