import { NavLink } from "react-router-dom";
import logo from "../../assets/лого без фона.png";

export default function Header() {
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
              <NavLink to="/">
                {({ isActive }) => (
                  <button
                    className={`btn btn-orange transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white -translate-y-2 shadow-lg"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    Главная
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/оНас">
                {({ isActive }) => (
                  <button
                    className={`btn btn-pink transition-all duration-300 ${
                      isActive
                        ? "bg-pink-500 text-white -translate-y-2 shadow-lg"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    Наш детский сад
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/мероприятия">
                {({ isActive }) => (
                  <button
                    className={`btn btn-blue transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white -translate-y-2 shadow-lg"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    Мероприятия
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/родителям">
                {({ isActive }) => (
                  <button
                    className={`btn btn-red transition-all duration-300 ${
                      isActive
                        ? "bg-red-500 text-white -translate-y-2 shadow-lg"
                        : "hover:-translate-y-0.5"
                    }`}
                  >
                    Родителям
                  </button>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
