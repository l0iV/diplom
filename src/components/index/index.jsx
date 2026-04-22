import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import groupsData from "./listIndex.jsx/listIndex";
import logoMain from "../../assets/лого без фона.png";
import SliderNews from "../sliderNews/sliderRooms";
import god from "../../assets/god.png";
import banner from "../../assets/banner_news.png";
import listLessons from "./listIndex.jsx/listLessons";
import listGerb from "./listIndex.jsx/listGerb";
import teachersList from "../sliderTeachers/list/listTeachers";

export default function Index() {
  // Состояния для модалки группы
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Состояния для модалки педагога
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);

  // Функция открытия модалки группы
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  // Функция закрытия модалки группы
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  // Функция открытия модалки педагога
  const handleTeacherClick = (teacherName) => {
    const teacher = teachersList.find((t) => t.name === teacherName);
    if (teacher) {
      setSelectedTeacher(teacher);
      setIsTeacherModalOpen(true);
    }
  };

  // Функция закрытия модалки педагога
  const closeTeacherModal = () => {
    setIsTeacherModalOpen(false);
    setSelectedTeacher(null);
  };

  // Функция поиска фото воспитателя
  const getTeacherImage = (teacherName) => {
    const teacher = teachersList.find((t) => t.name === teacherName);
    return teacher ? teacher.image : null;
  };

  return (
    <section className="flex flex-col w-full h-full items-center gap-[50px]">
      <div className="w-full bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] flex flex-col gap-[50px] items-center justify-center p-[40px]">
        <div className="w-[90%] flex flex-col items-center gap-[50px]">
          <div className="flex items-center w-full justify-between">
            <div className="text-start">
              <h1 className="text-[45px] font-bold text-green-700">
                Муниципальное бюджетное дошкольное
              </h1>
              <p className="text-[35px] font-bold text-gray-700">
                образовательное учреждение "Детский сад
              </p>
              <p className="text-[35px] font-bold text-gray-700">
                комбинированного вида №18"
              </p>
              <p className="text-[18px] text-gray-500">
                МБДОУ "ДС комбинированного вида №18"
              </p>
            </div>
            <div>
              <img src={logoMain} alt="" className="w-[500px]" />
            </div>
          </div>
          <div className="bg-white rounded-[30px] p-[30px] shadow-lg w-[90%] flex flex-col items-center gap-[30px]">
            <h2 className="text-[28px] font-bold text-green-600 text-center">
              Наши контакты
            </h2>
            <div className="flex items-center gap-[25px] justify-around w-full">
              <div className="flex gap-[15px] items-start">
                <span className="text-[25px]">🏠</span>
                <div>
                  <p className="font-bold text-[16px]">Адрес:</p>
                  <p className="text-gray-600 text-[14px]">
                    301364, Тульская область, г. Алексин, ул. Заводская, д. 5-а
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <span className="text-[25px]">📞</span>
                <div>
                  <p className="font-bold text-[16px]">Контактный телефон:</p>
                  <p className="text-gray-600 text-[14px]">8 (48753) 2-31-92</p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <span className="text-[25px]">✉️</span>
                <div>
                  <p className="font-bold text-[16px]">Электронная почта:</p>
                  <p className="text-gray-600 text-[14px]">
                    aleksin.ds18@tularegion.org
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <span className="text-[25px]">⏰</span>
                <div>
                  <p className="font-bold text-[16px]">Режим работы:</p>
                  <p className="text-gray-600 text-[14px]">
                    пн — пт: 07:00—19:00
                  </p>
                  <p className="text-gray-500 text-[12px]">
                    выходные: суббота-воскресенье
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] flex flex-col gap-[30px]">
        <h1 className="font-bold text-center text-[40px] text-blue-800">
          Группы детского сада
        </h1>
        <div className="flex items-center justify-around w-full flex-wrap gap-[20px]">
          {groupsData.map((group) => (
            <div
              key={group.id}
              onClick={() => handleGroupClick(group)}
              className="bg-white rounded-[20px] p-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-[5px] flex flex-col gap-[30px] min-w-[400px] min-h-[250px] cursor-pointer"
            >
              <div className="flex items-center gap-[15px]">
                <img
                  src={group.icon}
                  alt={`Иконка ${group.name}`}
                  className="w-[50px]"
                />
                <div>
                  <p className="text-xl font-bold">{group.name}</p>
                  <p className="text-gray-500 text-[14px]">{group.age}</p>
                </div>
              </div>
              <div className="border-t pt-[15px]">
                <p className="text-xl font-bold text-blue-600 mb-[10px]">
                  {group.groupName}
                </p>
                <p className="text-gray-400 text-[14px] mb-[5px]">
                  Воспитатели:
                </p>
                <ul className="space-y-[5px]">
                  {group.teachers.map((teacher, index) => (
                    <li key={index} className="text-gray-600 text-[14px]">
                      {teacher}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SliderNews />
      <div className="w-[90%] flex flex-col items-center gap-[30px] min-h-[550px]">
        <p className="text-center font-bold text-[40px] text-red-600">
          Тренируем навыки будущего
        </p>
        <p className="text-center font-bold text-[25px] text-red-400">
          Чтобы мечты детей сбывались
        </p>
        <div className="flex items-center gap-[10px] w-full h-full justify-center flex-wrap">
          {listLessons.map((item) => {
            return (
              <div
                className={`flex flex-col items-center border-[2px] rounded-[20px] p-[10px] w-[300px] min-h-[500px] card-${item.color}  `}
                key={item.id}
              >
                <div className="flex flex-col items-center w-full h-full">
                  <div>
                    <h3 className={`font-bold text-[20px] title-${item.color}`}>
                      {item.name}, {item.age}
                    </h3>
                  </div>
                  <div className="text-[40px]">
                    <img src={item.emoji} alt="" className="" />
                  </div>
                </div>
                <p className="text-[16px] italic text-gray-700 text-center">
                  "{item.text}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <ul className="flex flex-col gap-[30px] items-center banners w-[90%]">
        <li>
          <img
            src={god}
            alt=""
            className="cursor-pointer w-full max-w-[700px] rounded-[20px] shadow-lg hover:shadow-2xl transition-all"
          />
        </li>
        <li>
          <img
            src={banner}
            alt=""
            className="cursor-pointer w-full max-w-[700px] rounded-[20px] shadow-lg hover:shadow-2xl transition-all"
          />
        </li>
      </ul>
      <div className="flex flex-wrap items-center justify-center gap-[40px] w-[90%] py-[30px] border-t border-b border-gray-200">
        {listGerb.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-[15px] w-[200px] hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[70px] w-auto object-contain"
            />
            <p className="text-center text-gray-500 text-[12px] hover:text-blue-500 transition-colors">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[10px] py-[30px]">
        <p className="text-center text-gray-700">
          Столкнулись с нарушением закона? Сообщите нам
        </p>
        <NavLink to="https://licey3-kras.gosuslugi.ru/netcat_files/userfiles/2025_AntiKor/Federalnyy_zakon_O_protivodeystvii_korruptsii.pdf">
          <p className="cursor-pointer underline text-blue-500 hover:text-blue-700 transition-colors text-center">
            Противодействие коррупции
          </p>
        </NavLink>
      </div>

      {/* МОДАЛЬНОЕ ОКНО ГРУППЫ */}
      {isModalOpen && selectedGroup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-[30px] max-w-[500px] w-[90%] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute top-[20px] right-[20px] w-[35px] h-[35px] rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-[20px] transition-all"
            >
              ✕
            </button>

            {/* Шапка */}
            <div className="flex flex-col items-center gap-[15px] p-[30px] border-b">
              <div className="text-[60px]">
                <img src={selectedGroup.icon} alt="" className="w-[60px]" />
              </div>
              <h2 className="text-[28px] font-bold text-blue-800 text-center">
                {selectedGroup.name}
              </h2>
              <p className="text-[18px] text-gray-500">{selectedGroup.age}</p>
              <p className="text-[20px] font-bold text-blue-600 text-center">
                {selectedGroup.groupName}
              </p>
            </div>

            {/* Педагоги - теперь кликабельные */}
            <div className="p-[30px]">
              <h3 className="text-[18px] font-bold text-gray-700 mb-[15px]">
                👩‍🏫 Педагоги группы:
              </h3>
              <div className="flex flex-col gap-[15px]">
                {selectedGroup.teachers.map((teacher, index) => {
                  const teacherImage = getTeacherImage(teacher);
                  return (
                    <div
                      key={index}
                      onClick={() => handleTeacherClick(teacher)}
                      className="flex items-center gap-[15px] p-[10px] bg-gray-50 rounded-[15px] cursor-pointer hover:bg-gray-100 transition-all hover:scale-[1.02]"
                    >
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-[25px]">
                        {teacherImage ? (
                          <img
                            src={teacherImage}
                            alt={teacher}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          "👩‍🏫"
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[16px] text-gray-800">
                          {teacher}
                        </p>
                        <p className="text-[12px] text-gray-500">Воспитатель</p>
                      </div>
                      <div className="text-blue-500 text-[14px]">→</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Кнопка закрытия */}
            <div className="p-[30px] pt-0">
              <button
                onClick={closeModal}
                className="w-full py-[12px] bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-[20px] font-bold hover:opacity-90 transition-all"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ПЕДАГОГА (копия из SliderTeachers) */}
      {isTeacherModalOpen && selectedTeacher && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-[20px]"
          onClick={closeTeacherModal}
        >
          <div
            className="bg-white rounded-[20px] max-w-[500px] w-full p-[30px] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTeacherModal}
              className="absolute top-[15px] right-[20px] text-[30px] text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
            <div className="text-center flex flex-col items-center w-full gap-[10px]">
              {selectedTeacher.image ? (
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-[120px] h-[120px] rounded-full object-cover border-4 border-blue-400"
                />
              ) : (
                <div className="w-[120px] h-[120px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-[50px]">
                  👩‍🏫
                </div>
              )}
              <h3 className="text-[25px] font-bold mb-[5px]">
                {selectedTeacher.name}
              </h3>
              <p className="text-blue-600 text-[16px]">
                {selectedTeacher.position}
              </p>
              <div className="flex flex-col text-start indent-10 gap-[10px]">
                <p>
                  <span className="font-bold">Стаж:</span>{" "}
                  {selectedTeacher.experience}
                </p>
                <p>
                  <span className="font-bold">Образование:</span>{" "}
                  {selectedTeacher.education}
                </p>
                <p>
                  <span className="font-bold">Группа:</span>{" "}
                  {selectedTeacher.group || "Не указана"}
                </p>
                <p>
                  <span className="font-bold">Телефон:</span>{" "}
                  {selectedTeacher.phone}
                </p>
              </div>
              <button
                onClick={closeTeacherModal}
                className="w-full py-[12px] bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-[10px] font-semibold hover:shadow-lg mt-[10px]"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
