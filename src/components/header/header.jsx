import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/лого без фона.png";
export default function Header() {
  const navLinkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <section className="flex w-full min-h-[150px] items-center flex-col gap-[50px]">
      <div className="w-full justify-center items-center flex logo">
        <NavLink to="/">
          <img src={logo} alt="" className="w-[700px]" />
        </NavLink>
      </div>
      <section className="flex flex-col items-center w-[90%]">
        <div className="flex items-center w-full">
          <ul className="flex w-full justify-evenly items-center header-btn">
            <li>
              <NavLink to="оНас" style={navLinkStyle}>
                <button className="btn btn-pink">Наш детский сад</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="мероприятия">
                <button className="btn btn-blue">Мероприятия</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="родителям" style={navLinkStyle}>
                <button className="btn btn-red">Родителям</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
