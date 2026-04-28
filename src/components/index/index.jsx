import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import groupsData from "./listIndex.jsx/listIndex";
import logoMain from "../../assets/лого без фона.png";
import SliderNews from "../sliderNews/sliderRooms";
import god from "../../assets/god.png";
import banner from "../../assets/banner_news.png";
import listLessons from "./listIndex.jsx/listLessons";
import listGerb from "./listIndex.jsx/listGerb";
import teachersList from "../sliderTeachers/list/listTeachers";
import GROUP_COLORS from "./listIndex.jsx/colorGroupList";

export default function Index() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);

  const openGroup = (g) => {
    setSelectedGroup(g);
    setIsModalOpen(true);
  };
  const closeGroup = () => {
    setSelectedGroup(null);
    setIsModalOpen(false);
  };
  const openTeacher = (name) => {
    const t = teachersList.find((t) => t.name === name);
    if (t) {
      setSelectedTeacher(t);
      setIsTeacherModalOpen(true);
    }
  };
  const closeTeacher = () => {
    setSelectedTeacher(null);
    setIsTeacherModalOpen(false);
  };
  const getTeacherImage = (name) =>
    teachersList.find((t) => t.name === name)?.image ?? null;

  return (
    <section className="flex flex-col w-full items-center">
      <div className="w-full bg-gradient-to-br from-green-100 via-emerald-50 to-fuchsia-100 p-[20px] flex justify-center">
        <div className="w-[80%] flex flex-col gap-[40px] items-center full-index-title">
          <div className="flex items-center gap-[32px] justify-between w-full main-block-title">
            <div className="text-start flex flex-col gap-[10px] block-title">
              <div className="inline-flex items-center gap-2 px-4 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Принимаем заявки на 2025–2026 учебный год
              </div>
              <div className="name-detSad">
                <h1 className="text-[40px] font-bold flex flex-col items-start">
                  Муниципальное бюджетное
                </h1>
                <p className="text-green-600 text-[40px] font-bold">
                  дошкольное образовательное
                </p>
                <p className="text-[40px] font-bold">учреждение</p>
              </div>
              <div className="flex flex-col items-start gap-[10px] initials">
                <p className="text-[18px] text-slate-700">
                  «Детский сад комбинированного вида №18»
                </p>
                <p className=" text-slate-400 text-[18px]">
                  МБДОУ «ДС комбинированного вида №18»
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <NavLink to="/родителям">
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-500 p-[12px] text-[15px] font-bold text-white shadow-lg shadow-green-200 transition-all hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl">
                    Подать заявку
                  </span>
                </NavLink>
                <NavLink to="/оНас">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-green-400 hover:text-green-700">
                    О нас →
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="logoDetSad">
              <img
                src={logoMain}
                alt="Логотип ДС №18"
                className="w-[400px]  drop-shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white/80 backdrop-blur-md p-5 shadow-lg main-contacts flex flex-col justify-center w-full">
            <h2 className="text-center text-lg font-bold text-green-700">
              Наши контакты
            </h2>
            <div className="flex items-center justify-between block-contacts">
              {[
                {
                  icon: "🏠",
                  label: "Адрес",
                  value:
                    "301364, Тульская обл., г. Алексин, ул. Заводская, д. 5-а",
                },
                {
                  icon: "📞",
                  label: "Контактный телефон",
                  value: "8 (48753) 2-31-92",
                },
                {
                  icon: "✉️",
                  label: "Электронная почта",
                  value: "aleksin.ds18@tularegion.org",
                },
                {
                  icon: "⏰",
                  label: "Режим работы",
                  value: "пн — пт: 07:00—19:00",
                },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-white hover:shadow-md content-contacts"
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 leading-snug">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*ГРУППЫ */}
      <div className="w-full bg-white flex items-center min-h-[500px]">
        <div className="w-full flex flex-col items-center justify-center gap-[20px] ">
          <div className=" text-center">
            <h2 className="text-2xl font-extrabold text-blue-800">
              Группы детского сада
            </h2>
            <p className=" text-sm text-slate-400">
              Нажмите на группу, чтобы узнать подробнее
            </p>
          </div>
          <div className="flex items-center justify-around gap-[50px] h-max  main-card-group">
            {groupsData.map((group, i) => {
              const c = GROUP_COLORS[i % GROUP_COLORS.length];
              return (
                <button
                  key={group.id}
                  onClick={() => openGroup(group)}
                  className={`min-h-[300px] min-w-[300px] flex flex-col gap-4 rounded-3xl border-2 bg-gradient-to-br ${c.bg} ${c.border}
                    p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white p-2 shadow-sm">
                      <img
                        src={group.icon}
                        alt={group.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <p className={`text-base font-bold ${c.accent}`}>
                        {group.name}
                      </p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${c.badge}`}
                      >
                        {group.age}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-white/60 pt-4">
                    <p className="text-base font-bold text-blue-700">
                      {group.groupName}
                    </p>
                    <p className="mt-2 text-xs text-slate-400 uppercase tracking-wide">
                      Воспитатели
                    </p>
                    <ul className="mt-1 flex flex-col gap-1">
                      {group.teachers.map((t, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-600 leading-snug"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`mt-auto self-end text-xs font-semibold ${c.accent} group-hover:translate-x-1 transition-transform`}
                  >
                    Подробнее →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[85%] flex justify-center">
        <SliderNews />
      </div>
      <div className="w-[85%] min-h-[700px] main-container flex flex-col gap-[20px] items-center justify-center">
        <h1 className="text-center font-bold text-[40px] text-red-600 main-title tracking-wide shadow-text">
          Тренируем навыки будущего
        </h1>
        <p className="text-center font-bold text-[25px] text-red-400 main-subtitle tracking-wider">
          Чтобы мечты детей сбывались
        </p>
        <div className="main-card-kids flex items-center h-full gap-[1px]">
          {listLessons.map((item) => {
            return (
              <div
                className={`card-kids card-${item.color} min-h-[600px] flex flex-col items-center justify-center gap-[30px] rounded-[50px] p-[10px] w-[300px] border-2 border-${item.color}-300`}
                key={item.id}
              >
                <div className="card-content w-full">
                  <div className="card-header">
                    <h3
                      className={`font-bold text-[20px] title-${item.color} text-center`}
                    >
                      {item.name}, {item.age}
                    </h3>
                  </div>
                  <div className="card-emoji flex w-full items-center justify-center">
                    <img
                      src={item.emoji}
                      alt={item.name}
                      className="emoji-image w-[400px] h-[400px] object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <p className="text-[16px] italic text-gray-700 text-center card-text">
                  "{item.text}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[80%] flex items-center justify-center min-h-[300px] main-banner">
        <div className="flex w-[60%] items-center justify-center h-full main-banner">
          <div className="flex items-center w-full gap-[20px] justify-center banner">
            {[god, banner].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-[60%] h-full rounded-3xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl img-banner"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="gerb-container w-full bg-white flex flex-col items-center gap-[40px] min-h-[400px] justify-center">
        <div className="gerb-grid  w-full flex items-center justify-center gap-[32px]">
          {listGerb.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gerb-item  flex flex-col items-center gap-3 max-w-[200px] transition-all duration-300 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="gerb-image object-contain w-[80px] h-[80px]"
              />
              <p className="gerb-title text-center text-xs text-slate-400 leading-snug group-hover:text-blue-500 transition-colors">
                {item.title}
              </p>
            </a>
          ))}
        </div>
        <div className="text-center title-corypcia">
          <p className="text-sm text-slate-500">
            Столкнулись с нарушением закона? Сообщите нам
          </p>
          <a
            href="https://licey3-kras.gosuslugi.ru/netcat_files/userfiles/2025_AntiKor/Federalnyy_zakon_O_protivodeystvii_korruptsii.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-500 underline underline-offset-2 hover:text-blue-700 transition-colors"
          >
            Противодействие коррупции
          </a>
        </div>
      </div>
      {isModalOpen &&
        selectedGroup &&
        (() => {
          const i = groupsData.findIndex((g) => g.id === selectedGroup.id);
          const c = GROUP_COLORS[i % GROUP_COLORS.length];
          return (
            <div
              onClick={closeGroup}
              className="animate-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="animate-modal relative flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-3xl bg-white"
              >
                {/* Шапка */}
                <div
                  className={`flex flex-col items-center gap-3 rounded-t-3xl bg-gradient-to-br ${c.bg} p-8`}
                >
                  <button
                    onClick={closeGroup}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-slate-500 transition hover:bg-white"
                  >
                    ✕
                  </button>
                  <div className="rounded-2xl bg-white p-3 shadow-md">
                    <img
                      src={selectedGroup.icon}
                      alt=""
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <h2
                    className={`text-xl font-extrabold text-center ${c.accent}`}
                  >
                    {selectedGroup.name}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${c.badge}`}
                  >
                    {selectedGroup.age}
                  </span>
                  <p className="text-base font-bold text-blue-700">
                    {selectedGroup.groupName}
                  </p>
                </div>

                {/* Педагоги */}
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">
                    👩‍🏫 Педагоги группы
                  </h3>
                  {selectedGroup.teachers.map((teacher, idx) => {
                    const img = getTeacherImage(teacher);
                    return (
                      <div
                        key={idx}
                        onClick={() => openTeacher(teacher)}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl bg-slate-50 p-3 transition hover:bg-slate-100 hover:scale-[1.01]"
                      >
                        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-xl">
                          {img ? (
                            <img
                              src={img}
                              alt={teacher}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            "👩‍🏫"
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {teacher}
                          </p>
                          <p className="text-xs text-slate-400">Воспитатель</p>
                        </div>
                        <span className="text-blue-400 text-sm">→</span>
                      </div>
                    );
                  })}
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={closeGroup}
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
    </section>
  );
}
