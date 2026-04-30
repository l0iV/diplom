import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/лого без фона.png";

const NAV_LINKS = [
  {
    to: "/",
    label: "Главная",
    accent: "orange",
    active: "bg-orange shadow-orange",
  },
  {
    to: "/оНас",
    label: "Наш детский сад",
    accent: "pink",
    active: "bg-pink shadow-pink",
  },
  {
    to: "/мероприятия",
    label: "Мероприятия",
    accent: "sky",
    active: "bg-sky-400 shadow-sky-200",
  },
  {
    to: "/родителям",
    label: "Родителям",
    accent: "rose",
    active: "bg-rose-400 shadow-rose-200",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // закрыть меню при смене маршрута
  const close = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300
        ${scrolled ? " backdrop-blur-md shadow-md" : "bg-white"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Лого */}
        <NavLink to="/" onClick={close} className="shrink-0">
          <img
            src={logo}
            alt="ДС №18"
            className="h-16 w-auto object-contain transition-transform hover:scale-105 sm:h-20 lg:h-24"
          />
        </NavLink>

        {/* Навигация — десктоп */}
        <nav className="hidden lg:flex items-center gap-3 lg:gap-4">
          {NAV_LINKS.map(({ to, label, active }) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {({ isActive }) => (
                <span
                  className={`
                    inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold
                    transition-all duration-300
                    ${
                      isActive
                        ? `${active} text-white shadow-lg`
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-0.5"
                    }
                  `}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Бургер — мобильный */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex lg:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-slate-100 transition hover:bg-slate-200"
          aria-label="Меню"
        >
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 border-t border-slate-100" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map(({ to, label, active }) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={close}>
              {({ isActive }) => (
                <span
                  className={`
                    block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200
                    ${
                      isActive
                        ? `${active} text-white shadow-md`
                        : "text-slate-600 hover:bg-slate-100"
                    }
                  `}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
